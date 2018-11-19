package com.softplan.fullstack.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.exception.ProcessoNotFoundException;
import com.softplan.fullstack.model.Processo;
import com.softplan.fullstack.model.Usuario;
import com.softplan.fullstack.repository.ProcessoRepository;

@Service
public class ProcessoService {
	
	@Autowired
	private ProcessoRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	public List<Processo> getProcessos(final String email) {
		return this.repository.findAllByCriadorEmail(email);
	}
	
	public Processo getProcessoById(final long id) {
		Optional<Processo> optional = this.repository.findById(id);
		
		if(!optional.isPresent()) {
			throw new ProcessoNotFoundException("Processo com o id " + id + " não encontrado");
		}
		
		return optional.get();
	}

	public Processo salvar(Processo processo, UserDetails userDetails) {
		Usuario usuario = usuarioService.getUsuarioByEmail(userDetails.getUsername());
		processo.setCriador(usuario);
		processo.setHoraCriacao(LocalDateTime.now());
		return this.repository.save(processo);
	}

	public Processo alterar(long id, Processo processo) {
		final Processo anterior = this.repository.findById(id).orElse(null);
		
		if(Objects.isNull(anterior)) {
			throw new ProcessoNotFoundException("id - " + id);
		}
		
		processo.setId(id);
		
		return this.repository.save(processo);
	}
	
}

package com.softplan.fullstack.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.dto.UsuarioParecerProcessoDTO;
import com.softplan.fullstack.model.Processo;
import com.softplan.fullstack.model.Usuario;
import com.softplan.fullstack.model.UsuarioParecerProcesso;
import com.softplan.fullstack.repository.UsuarioParecerProcessoRepository;

@Service
public class UsuarioParecerProcessoService {
	
	@Autowired
	private UsuarioParecerProcessoRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private ProcessoService processoService;
	
	public List<UsuarioParecerProcesso> getAllPendentesByProcesso(final long idProcesso) {
		return repository.findAllByProcessoIdAndPendenteIsTrue(idProcesso);
	}

	public List<UsuarioParecerProcesso> getAllPendentesByUsuarioLogado(UserDetails userDetails) {
		return repository.findAllByUsuarioEmailAndPendenteIsTrue(userDetails.getUsername());
	}

	public UsuarioParecerProcesso save(UsuarioParecerProcessoDTO dto) {
		UsuarioParecerProcesso usuarioParecerProcesso = new UsuarioParecerProcesso();
		usuarioParecerProcesso.setUsuario(this.usuarioService.getUsuarioPorId(dto.getUsuarioId()));
		usuarioParecerProcesso.setProcesso(this.processoService.getProcessoById(dto.getProcessoId()));
		
		return this.repository.save(usuarioParecerProcesso);
	}
	
}

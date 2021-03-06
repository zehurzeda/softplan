package com.softplan.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.softplan.dto.UsuarioParecerProcessoDTO;
import com.softplan.exception.UsuarioParecerProcessoNotFoundException;
import com.softplan.model.Processo;
import com.softplan.model.Usuario;
import com.softplan.model.UsuarioParecerProcesso;
import com.softplan.repository.UsuarioParecerProcessoRepository;

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
	
	public UsuarioParecerProcesso findById(final long idUsuarioProcesso) {
		Optional<UsuarioParecerProcesso> optional = this.repository.findById(idUsuarioProcesso);
		
		if(!optional.isPresent()) {
			throw new UsuarioParecerProcessoNotFoundException("Não encontrado vínculo com id " + idUsuarioProcesso);
		}
		
		return optional.get();
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
	
	public UsuarioParecerProcesso save(final UsuarioParecerProcesso entity) {
		return this.repository.save(entity);
	}

	public List<UsuarioParecerProcesso> saveAllByIdProcessoAndUsuarios(long idProcesso, List<Usuario> usuarios) {
		Processo processo = this.processoService.getProcessoById(idProcesso);
		List<UsuarioParecerProcesso> usuariosSalvos = new ArrayList<>();

		usuarios.forEach(usuario -> {
			UsuarioParecerProcesso usuarioParecerProcesso = new UsuarioParecerProcesso();
			usuarioParecerProcesso.setUsuario(usuario);
			usuarioParecerProcesso.setProcesso(processo);

			usuariosSalvos.add(usuarioParecerProcesso);
		});

		return this.repository.saveAll(usuariosSalvos);
	}

	public void deleteAll(List<UsuarioParecerProcesso> usuariosParecerProcesso) {
		List<UsuarioParecerProcesso> usuariosADeletar = new ArrayList<>();
		usuariosParecerProcesso.forEach(usuarioParecerProcesso -> {
			Optional<UsuarioParecerProcesso> optional = this.repository.findById(usuarioParecerProcesso.getId());
			if(!optional.isPresent()) {
				throw new UsuarioParecerProcessoNotFoundException("Não encontrado vínculo com id " + usuarioParecerProcesso.getId());
			}
			usuariosADeletar.add(optional.get());
		});
		this.repository.deleteAll(usuariosADeletar);
	}

}

package com.softplan.fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.dto.ParecerDTO;
import com.softplan.fullstack.model.Parecer;
import com.softplan.fullstack.model.UsuarioParecerProcesso;
import com.softplan.fullstack.repository.ParecerRepository;

@Service
public class ParecerService {
	
	@Autowired
	private ParecerRepository repository;
	
	@Autowired
	private UsuarioParecerProcessoService parecerProcessoService;
	
	
	public Parecer salvar(final long idParecerProcesso, final Parecer parecer) {
		UsuarioParecerProcesso usuarioParecerProcesso = this.parecerProcessoService.findById(idParecerProcesso);
		
		usuarioParecerProcesso.setPendente(false);
		usuarioParecerProcesso = this.parecerProcessoService.save(usuarioParecerProcesso);
		
		parecer.setParecerProcesso(usuarioParecerProcesso);
		
		return this.repository.save(parecer);
	}
	
	
	public List<ParecerDTO> getAllByProcessoId(final long idParecerProcesso) {
		return this.repository.findAllByParecerProcesso_ProcessoId(idParecerProcesso);
	}
}

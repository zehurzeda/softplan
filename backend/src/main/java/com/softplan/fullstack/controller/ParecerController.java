package com.softplan.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.softplan.fullstack.dto.ParecerDTO;
import com.softplan.fullstack.model.Parecer;
import com.softplan.fullstack.service.ParecerService;

@RestController
@RequestMapping("/parecer")
public class ParecerController {
	
	@Autowired
	private ParecerService service;
	
	@RequestMapping(value = "/{idParecerProcesso}", method = RequestMethod.GET)
	public List<ParecerDTO> getAllByParecerProcessoId(@PathVariable final long idParecerProcesso){
		return this.service.getAllByProcessoId(idParecerProcesso);
	}
	
	@RequestMapping(value = "/{idParecerProcesso}", method = RequestMethod.POST)
	@PreAuthorize("hasRole('FINALIZADOR')")
	public Parecer salvar(@PathVariable final long idParecerProcesso, @RequestBody final Parecer parecer) {
		return this.service.salvar(idParecerProcesso, parecer);
	}
}

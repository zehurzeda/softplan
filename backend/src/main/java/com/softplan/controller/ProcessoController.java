package com.softplan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.softplan.model.Processo;
import com.softplan.service.ProcessoService;

@RestController
@RequestMapping("/processo")
public class ProcessoController {
	
	@Autowired
	private ProcessoService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Processo> getAllProcessos(@AuthenticationPrincipal final UserDetails userDetails) {
		return this.service.getProcessos(userDetails.getUsername());
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Processo getProcessoById(@PathVariable long id) {
		return this.service.getProcessoById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@PreAuthorize("hasRole('TRIADOR')")
	public Processo salvar(@RequestBody Processo processo, @AuthenticationPrincipal final UserDetails userDetails) {
		return this.service.salvar(processo, userDetails);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@PreAuthorize("hasRole('TRIADOR')")
	public Processo editar(@PathVariable long id, @RequestBody Processo processo) {
		return this.service.alterar(id, processo);
	}
}

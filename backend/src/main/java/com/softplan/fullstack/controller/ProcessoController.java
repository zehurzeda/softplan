package com.softplan.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.softplan.fullstack.entity.Processo;
import com.softplan.fullstack.service.ProcessoService;

@RestController
@RequestMapping("/processo")
public class ProcessoController {
	
	@Autowired
	private ProcessoService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Processo> getAllProcessos() {
		return this.service.getProcessos();
	}
}

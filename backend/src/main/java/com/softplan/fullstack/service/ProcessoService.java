package com.softplan.fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.entity.Processo;
import com.softplan.fullstack.repository.ProcessoRepository;

@Service
public class ProcessoService {
	
	@Autowired
	private ProcessoRepository repository;
	
	public List<Processo> getProcessos() {
		return this.repository.findAll();
	}
	
}

package com.softplan.fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.model.Role;
import com.softplan.fullstack.repository.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	private RoleRepository repository;
	
	public List<Role> getAllRoles() {
		return this.repository.findAll();
	}
	
}

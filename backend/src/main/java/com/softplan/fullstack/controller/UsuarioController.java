package com.softplan.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.softplan.fullstack.dto.UsuarioDTO;
import com.softplan.fullstack.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<UsuarioDTO> getAllUsuarios() {
		return this.service.getAllUsuarios();
	}
	
	@RequestMapping(value ="/{id}", method = RequestMethod.GET)
	public UsuarioDTO getUsuarioPorId(@PathVariable long id) {
		return this.service.getUsuarioPorId(id);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')")
	public UsuarioDTO createUsuario(@RequestBody UsuarioDTO dto) {
		return this.service.salvar(dto);
	}
	
	@RequestMapping(value ="/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") long id) {
		this.service.deletar(id);
	}
	
	@RequestMapping(value ="/{id}", method = RequestMethod.PUT)
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Object> updateUsuario(@RequestBody UsuarioDTO dto, @PathVariable long id) {
		return this.service.update(id, dto);
	}
}

package com.softplan.fullstack.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.softplan.fullstack.dto.UsuarioDTO;
import com.softplan.fullstack.model.Usuario;
import com.softplan.fullstack.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService service;

	@RequestMapping(method = RequestMethod.GET)
	public List<Usuario> getAllUsuarios() {
		return this.service.getAllUsuarios();
	}
	
	@RequestMapping(value = "/role/{role}", method = RequestMethod.GET)
	public List<Usuario> getAllUsuariosByRoleAndIdProcessoIsDiferent(@PathVariable String role, @RequestParam("idProcesso") long idProcesso) {
		return this.service.getAllUsuariosByRoleAndIdProcessoIsDiferent(role, idProcesso);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Usuario getUsuarioPorId(@PathVariable long id) {
		return this.service.getUsuarioPorId(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@PreAuthorize("hasRole('ADMIN')")
	public Usuario createUsuario(@RequestBody UsuarioDTO dto) {
		return this.service.salvar(dto);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@PreAuthorize("hasRole('ADMIN')")
	public void delete(@PathVariable("id") long id) {
		this.service.deletar(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@PreAuthorize("hasRole('ADMIN')")
	public Usuario updateUsuario(@RequestBody UsuarioDTO dto, @PathVariable long id) {
		return this.service.update(id, dto);
	}

	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public List<String> getRolesLoggedUser(@AuthenticationPrincipal UserDetails principal) {
		return this.service.getUsuarioByEmail(principal.getUsername())
						   .getRoles().stream()
						   .map(role -> role.getNome())
				           .collect(Collectors.toList());
	}
}

package com.softplan.fullstack.controller;

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

import com.softplan.fullstack.dto.UsuarioParecerProcessoDTO;
import com.softplan.fullstack.model.Usuario;
import com.softplan.fullstack.model.UsuarioParecerProcesso;
import com.softplan.fullstack.service.UsuarioParecerProcessoService;

@RestController
@RequestMapping("/parecer-processo")
public class UsuarioParecerProcessoController {

	@Autowired
	private UsuarioParecerProcessoService service;

	@RequestMapping(value = "/{idProcesso}", method = RequestMethod.GET)
	public List<UsuarioParecerProcesso> getAllPendentesByProcesso(@PathVariable long idProcesso) {
		return this.service.getAllPendentesByProcesso(idProcesso);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<UsuarioParecerProcesso> getAllPendentesByUsuarioLogado(
			@AuthenticationPrincipal UserDetails userDetails) {
		return this.service.getAllPendentesByUsuarioLogado(userDetails);
	}

	@RequestMapping(method = RequestMethod.POST)
	@PreAuthorize("hasRole('TRIADOR')")
	public UsuarioParecerProcesso save(@RequestBody final UsuarioParecerProcessoDTO dto) {
		return this.service.save(dto);
	}

	@RequestMapping(value = "/{idProcesso}/vincular", method = RequestMethod.POST)
	@PreAuthorize("hasRole('TRIADOR')")
	public List<UsuarioParecerProcesso> vincularUsuariosProcesso(@PathVariable long idProcesso,
			@RequestBody final List<Usuario> usuarios) {
		return this.service.saveAllByIdProcessoAndUsuarios(idProcesso, usuarios);
	}
	
	@RequestMapping(value="/{idProcesso}/desvincular", method = RequestMethod.POST)
	@PreAuthorize("hasRole('TRIADOR')")
	public void desvincularUsuariosProcesso(@RequestBody final List<UsuarioParecerProcesso> usuariosParecerProcesso) {
		this.service.deleteAll(usuariosParecerProcesso);
	}

}

package com.softplan.fullstack.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Processo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String numeroProcesso;

	@OneToMany
	private List<ProcessoParecerUsuario> usuariosParecer;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumeroProcesso() {
		return numeroProcesso;
	}

	public void setNumeroProcesso(String numeroProcesso) {
		this.numeroProcesso = numeroProcesso;
	}

	public List<ProcessoParecerUsuario> getUsuariosParecer() {
		return usuariosParecer;
	}

	public void setUsuariosParecer(List<ProcessoParecerUsuario> usuariosParecer) {
		this.usuariosParecer = usuariosParecer;
	}

}

package com.softplan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Parecer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Column(length = 1024)
	private String parecer;

	@NotNull
	@OneToOne(fetch = FetchType.LAZY)
	private UsuarioParecerProcesso parecerProcesso;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getParecer() {
		return parecer;
	}

	public void setParecer(String parecer) {
		this.parecer = parecer;
	}

	public UsuarioParecerProcesso getParecerProcesso() {
		return parecerProcesso;
	}

	public void setParecerProcesso(UsuarioParecerProcesso parecerProcesso) {
		this.parecerProcesso = parecerProcesso;
	}

}

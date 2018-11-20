package com.softplan.fullstack.dto;

public class ParecerDTO {
	private Long id;

	private String parecer;

	private String nomeUsuario;

	public ParecerDTO(Long id, String parecer, String nomeUsuario) {
		super();
		this.id = id;
		this.parecer = parecer;
		this.nomeUsuario = nomeUsuario;
	}

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

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

}

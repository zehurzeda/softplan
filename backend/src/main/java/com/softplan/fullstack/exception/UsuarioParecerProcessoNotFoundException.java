package com.softplan.fullstack.exception;

public class UsuarioParecerProcessoNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public UsuarioParecerProcessoNotFoundException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}
	
	public UsuarioParecerProcessoNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}

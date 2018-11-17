package com.softplan.fullstack.exception;

public class UsuarioNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public UsuarioNotFoundException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}
	
	public UsuarioNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}

package com.softplan.exception;

public class ProcessoNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ProcessoNotFoundException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}
	
	public ProcessoNotFoundException(String errorMessage) {
		super(errorMessage);
	}
}

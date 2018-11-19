package com.softplan.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.fullstack.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Usuario findByEmail(String email);
	List<Usuario> findAllByRoles_Nome(String roleNome);
}

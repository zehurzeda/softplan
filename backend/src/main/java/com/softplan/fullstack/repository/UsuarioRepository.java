package com.softplan.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.fullstack.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
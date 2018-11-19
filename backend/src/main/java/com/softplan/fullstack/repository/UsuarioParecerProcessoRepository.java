package com.softplan.fullstack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.fullstack.model.UsuarioParecerProcesso;

public interface UsuarioParecerProcessoRepository extends JpaRepository<UsuarioParecerProcesso, Long> {
	List<UsuarioParecerProcesso> findAllByUsuarioEmail(String email);
	List<UsuarioParecerProcesso> findAllByUsuarioEmailAndPendenteIsTrue(String email);
	List<UsuarioParecerProcesso> findAllByProcessoId(long id);
	List<UsuarioParecerProcesso> findAllByProcessoIdAndPendenteIsTrue(long id);
}

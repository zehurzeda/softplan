package com.softplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.softplan.dto.ParecerDTO;
import com.softplan.model.Parecer;

public interface ParecerRepository extends JpaRepository<Parecer, Long> {
	@Query("select new com.softplan.dto.ParecerDTO(p.id, p.parecer, pp.usuario.nome) from Parecer p left join p.parecerProcesso pp left join pp.processo pr where pr.id = ?1")
	public List<ParecerDTO> findAllByParecerProcesso_ProcessoId(final long idParecerProcesso);
}

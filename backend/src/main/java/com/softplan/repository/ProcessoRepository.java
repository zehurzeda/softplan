package com.softplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.model.Processo;

public interface ProcessoRepository extends JpaRepository<Processo, Long>{
	List<Processo> findAllByCriadorEmail(String email);
}

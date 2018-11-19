package com.softplan.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.fullstack.model.Parecer;

public interface ParecerRepository extends JpaRepository<Parecer, Long> {
	
}

package com.softplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softplan.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}

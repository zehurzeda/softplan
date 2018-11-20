package com.softplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.softplan.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Usuario findByEmail(String email);

	List<Usuario> findAllByRoles_Nome(String roleNome);

	@Query("select DISTINCT(u) from Usuario u "
			+ "left join u.roles ur "
			+ "left join u.pareceresUsuario pu "
			+ "left join pu.processo p "
			+ "where ur.nome = ?1 "
			+ "and (pu is null or p.id <> ?2) "
			+ "or (select upp.id from UsuarioParecerProcesso upp where upp.usuario.id = u.id and upp.processo = p and upp.pendente = true) is null")
	List<Usuario> findAllUsuariosDisponiveisByRole(String roleNome, long idProcesso);
}
	
package com.softplan.fullstack.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.dto.UsuarioDTO;
import com.softplan.fullstack.exception.UsuarioNotFoundException;
import com.softplan.fullstack.model.Usuario;
import com.softplan.fullstack.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;

	public List<Usuario> getAllUsuarios() {
		return repository.findAll();
	}

	public List<Usuario> getAllUsuariosByRole(final String role) {
		return repository.findAllByRoles_Nome(role);
	}

	public List<Usuario> getAllUsuariosByRoleAndIdProcessoIsDiferent(final String role, final long idProcesso) {
		return repository.findAllUsuariosDisponiveisByRole(role, idProcesso);
	}

	public Usuario getUsuarioPorId(long id) {
		Optional<Usuario> usuario = this.repository.findById(id);

		if (!usuario.isPresent()) {
			throw new UsuarioNotFoundException("Usuário com id " + id + " não encontrado");
		}

		return usuario.get();
	}

	public Usuario getUsuarioByEmail(final String email) {
		return this.repository.findByEmail(email);
	}

	public Usuario salvar(UsuarioDTO dto) {
		dto.setSenha(this.bcryptEncoder.encode((dto.getSenha())));
		return this.repository.save(this.convertUsuarioDtoToUsuario(dto));
	}

	public void deletar(long id) {
		this.repository.deleteById(id);
	}

	public Usuario update(long id, UsuarioDTO dto) {
		Optional<Usuario> usuarioOpt = this.repository.findById(id);

		if (!usuarioOpt.isPresent()) {
			throw new UsuarioNotFoundException("id-" + id);
		}

		dto.setId(id);

		if (Objects.nonNull(dto.getSenha()) && !dto.getSenha().isEmpty()) {
			dto.setSenha(this.bcryptEncoder.encode((dto.getSenha())));
		} else {
			dto.setSenha(usuarioOpt.get().getSenha());
		}

		return this.repository.save(this.convertUsuarioDtoToUsuario(dto));
	}

	private Usuario convertUsuarioDtoToUsuario(final UsuarioDTO usuarioDTO) {
		return this.modelMapper.map(usuarioDTO, Usuario.class);
	}
}

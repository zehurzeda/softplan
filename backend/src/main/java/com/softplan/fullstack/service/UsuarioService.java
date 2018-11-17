package com.softplan.fullstack.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.softplan.fullstack.dto.UsuarioDTO;
import com.softplan.fullstack.entity.Usuario;
import com.softplan.fullstack.exception.UsuarioNotFoundException;
import com.softplan.fullstack.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private ModelMapper modelMapper;

	public List<UsuarioDTO> getAllUsuarios() {
		final List<Usuario> usuarios = repository.findAll();

		return usuarios.stream().map(usuario -> this.convertUsuarioToUsuarioDto(usuario)).collect(Collectors.toList());
	}

	public UsuarioDTO getUsuarioPorId(long id) {
		Optional<Usuario> usuario = this.repository.findById(id);

		if (!usuario.isPresent()) {
			throw new UsuarioNotFoundException("id-" + id);
		}

		return this.convertUsuarioToUsuarioDto(usuario.get());
	}

	public UsuarioDTO salvar(UsuarioDTO dto) {
		final Usuario usuarioSalvo = this.repository.save(this.convertUsuarioDtoToUsuario(dto));
		return this.convertUsuarioToUsuarioDto(usuarioSalvo);
	}

	private UsuarioDTO convertUsuarioToUsuarioDto(final Usuario usuario) {
		return this.modelMapper.map(usuario, UsuarioDTO.class);
	}

	private Usuario convertUsuarioDtoToUsuario(final UsuarioDTO usuarioDTO) {
		return this.modelMapper.map(usuarioDTO, Usuario.class);
	}

	public void deletar(long id) {
		this.repository.deleteById(id);
	}

	public ResponseEntity<Object> update(long id, UsuarioDTO dto) {
		Optional<Usuario> usuarioOpt = this.repository.findById(id);

		if (!usuarioOpt.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		dto.setId(id);

		this.repository.save(this.convertUsuarioDtoToUsuario(dto));

		return ResponseEntity.noContent().build();
	}
}

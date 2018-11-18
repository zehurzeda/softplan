package com.softplan.fullstack.service;

import java.util.List;
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

	public Usuario getUsuarioPorId(long id) {
		Optional<Usuario> usuario = this.repository.findById(id);

		if (!usuario.isPresent()) {
			throw new UsuarioNotFoundException("id-" + id);
		}

		return usuario.get();
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
		dto.setSenha(this.bcryptEncoder.encode((dto.getSenha())));
		
		return this.repository.save(this.convertUsuarioDtoToUsuario(dto));
	}
	
	private UsuarioDTO convertUsuarioToUsuarioDto(final Usuario usuario) {
		return this.modelMapper.map(usuario, UsuarioDTO.class);
	}
	
	private Usuario convertUsuarioDtoToUsuario(final UsuarioDTO usuarioDTO) {
		return this.modelMapper.map(usuarioDTO, Usuario.class);
	}
}

package com.softplan.fullstack.user;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.softplan.fullstack.entity.Usuario;
import com.softplan.fullstack.repository.UsuarioRepository;

public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByNomeUsuario(username);
        if (usuario == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(usuario.getNomeUsuario(), usuario.getSenha(), Collections.emptyList());
    }

}

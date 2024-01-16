
package com.arwlowloh.bubblepop.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Utilisateur utilisateur = utilisateurRepository.findByNom(username);
        if (utilisateur == null) {
            throw new UsernameNotFoundException(username);
        }
        return new UserDetailsImpl(utilisateur);
    }
}
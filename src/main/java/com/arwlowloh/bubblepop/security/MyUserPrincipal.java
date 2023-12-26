package com.arwlowloh.bubblepop.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.arwlowloh.bubblepop.model.Utilisateur;

public class MyUserPrincipal implements UserDetails {
    private Utilisateur utilisateur;

    public MyUserPrincipal(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(utilisateur.getRole()));
        return authorities;
    }

    @Override
    public String getPassword() {
        return utilisateur.getMot_de_passe();
    }

    @Override
    public String getUsername() {
        return utilisateur.getNom();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'isAccountNonExpired'");
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
        //throw new UnsupportedOperationException("Unimplemented method 'isAccountNonLocked'");
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'isCredentialsNonExpired'");
    }

    @Override
    public boolean isEnabled() {
        return true;
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'isEnabled'");
    }
}

package com.arwlowloh.bubblepop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.arwlowloh.bubblepop.model.Session;

@RepositoryRestResource
@CrossOrigin("http://localhost:3000")
public interface SessionRepository extends JpaRepository<Session, Long> {
    List<Session> findByUtilisateurId(Long Id);
}
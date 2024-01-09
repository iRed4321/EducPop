package com.arwlowloh.bubblepop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.arwlowloh.bubblepop.model.Question;

@RepositoryRestResource
@CrossOrigin("http://localhost:3000")
public interface QuestionRepository extends JpaRepository<Question, Long> {

}
package com.arwlowloh.bubblepop;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("http://localhost:3000")
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
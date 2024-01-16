package com.arwlowloh.bubblepop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CustomerRepository repository;

	private final UtilisateurRepository utilisateurRepository;

	public DatabaseLoader(CustomerRepository repository, UtilisateurRepository utilisateurRepository) {
		this.repository = repository;
		this.utilisateurRepository = utilisateurRepository;
	}

	@Autowired
	PasswordEncoder encoder;

	@Override
	public void run(String... strings) throws Exception {

        Customer customer = new Customer();

        customer.setFirstName("John");
        customer.setLastName("Smith");

		this.repository.save(customer);

		Utilisateur elea = new Utilisateur();

		elea.setNom("ejacqui9");
		elea.setMot_de_passe(encoder.encode("pass"));
		elea.setRole("USER");
		//$2a$10$pSZqCr5OoKPEy6yit3BQlut6Zt7mbFOAYEF8XFWrJ6DxHqL8DoJMS

		this.utilisateurRepository.save(elea);
	}
}
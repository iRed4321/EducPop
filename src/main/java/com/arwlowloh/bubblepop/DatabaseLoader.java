package com.arwlowloh.bubblepop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CustomerRepository customerRepository;
	private final UtilisateurRepository utilisateurRepository;

	public DatabaseLoader(CustomerRepository customerRepository, UtilisateurRepository utilisateurRepository) {
		this.customerRepository = customerRepository;
		this.utilisateurRepository = utilisateurRepository;
	}

	@Override
	public void run(String... strings) throws Exception {

        Customer customer = new Customer();

        customer.setFirstName("John");
        customer.setLastName("Smith");

		this.customerRepository.save(customer);

		Utilisateur utilisateur = new Utilisateur();
		utilisateur.setNom("Jacquin");
		utilisateur.setMot_de_passe(new BCryptPasswordEncoder().encode("pass"));
		utilisateur.setRole("USER");
		this.utilisateurRepository.save(utilisateur);
	}
}
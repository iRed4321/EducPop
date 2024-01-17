package com.arwlowloh.bubblepop;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.arwlowloh.bubblepop.model.Diapo;
import com.arwlowloh.bubblepop.model.Session;
import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.DiapoRepository;
import com.arwlowloh.bubblepop.repositories.SessionRepository;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class DatabaseLoader implements CommandLineRunner {


	private final UtilisateurRepository utilisateurRepository;

	private final SessionRepository sessionRepository;

	private final DiapoRepository diapoRepository;

	public DatabaseLoader( UtilisateurRepository utilisateurRepository, SessionRepository sessionRepository, DiapoRepository diapoRepository) {
		this.utilisateurRepository = utilisateurRepository;
		this.sessionRepository = sessionRepository;
		this.diapoRepository = diapoRepository;
	}

	@Autowired
	PasswordEncoder encoder;

	@Override
	public void run(String... strings) throws Exception {


		Utilisateur elea = new Utilisateur();

		elea.setNom("ejacqui9");
		elea.setMot_de_passe(encoder.encode("pass"));
		elea.setRole("USER");


		Utilisateur leo = new Utilisateur();
		leo.setNom("leo");
		leo.setMot_de_passe(encoder.encode("leo"));
		leo.setRole("USER");

		this.utilisateurRepository.save(elea);
		this.utilisateurRepository.save(leo);

		Session session1 = new Session("session A",elea);
		session1.addDiapo();
		//ArrayList<Diapo> diapos = new ArrayList<Diapo>();
		//diapos.add(diapo1);
		//session1.setDiapos(diapos);
		this.sessionRepository.save(session1);
	}
}
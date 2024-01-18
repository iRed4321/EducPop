package com.arwlowloh.bubblepop;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.arwlowloh.bubblepop.model.Bulle;
import com.arwlowloh.bubblepop.model.Diapo;
import com.arwlowloh.bubblepop.model.Question;
import com.arwlowloh.bubblepop.model.Session;
import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.BulleRepository;
import com.arwlowloh.bubblepop.repositories.DiapoRepository;
import com.arwlowloh.bubblepop.repositories.SessionRepository;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;
import com.arwlowloh.bubblepop.repositories.QuestionRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

@Component
public class DatabaseLoader implements CommandLineRunner {


	private final UtilisateurRepository utilisateurRepository;

	private final SessionRepository sessionRepository;

	private final DiapoRepository diapoRepository;

	private final BulleRepository bulleRepository;

	private final com.arwlowloh.bubblepop.repositories.QuestionRepository questionRepository;

	public DatabaseLoader( UtilisateurRepository utilisateurRepository, SessionRepository sessionRepository, DiapoRepository diapoRepository, BulleRepository bulleRepository, QuestionRepository questionRepository) {
		this.utilisateurRepository = utilisateurRepository;
		this.sessionRepository = sessionRepository;
		this.diapoRepository = diapoRepository;
		this.bulleRepository = bulleRepository;
		this.questionRepository = questionRepository;
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

		Session session1 = new Session("Feuille",leo);
		session1.addDiapo();
		Diapo diapo1=new Diapo(session1);
		this.sessionRepository.save(session1);
		this.diapoRepository.save(diapo1);

		Bulle bulle1=new Bulle(diapo1,"Arbre",1);
		Bulle bulle2=new Bulle(diapo1,"Fleur",1);
		this.bulleRepository.save(bulle1);
		this.bulleRepository.save(bulle2);

		Question question1=new Question("C'est quoi la photosynthèse ?",diapo1);
		Question question2=new Question("Pourquoi c'est vert une feuille ?",diapo1);
		this.questionRepository.save(question1);
		this.questionRepository.save(question2);

	}
}
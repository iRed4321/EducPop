package com.arwlowloh.bubblepop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import java.util.List;

@Entity
@Table(name = "session")
public class Session {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "nom", nullable = false)
    private String nom;

    @OneToMany(mappedBy="session")
    private List<Bulle> bulles;

    @OneToMany(mappedBy="session")
    private List<Question> questions;

    @ManyToOne
    @JoinColumn(name="utilisateur_id", nullable = false)
    private Utilisateur utilisateur;

    public Session(long id, String nom, Utilisateur utilisateur) {
        super();
        this.id = id;
        this.nom = nom;
        this.utilisateur = utilisateur;
    }

    public Session(String nom, Utilisateur utilisateur) {
        super();
        this.nom = nom;
        this.utilisateur = utilisateur;
    }

    public Session() {
        super();
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Bulle> getBulles() {
        return bulles;
    }

    public void setBulles(List<Bulle> bulles) {
        this.bulles = bulles;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
}
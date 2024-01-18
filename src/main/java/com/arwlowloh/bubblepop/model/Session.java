package com.arwlowloh.bubblepop.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

import java.util.ArrayList;
import java.util.List;

import com.arwlowloh.bubblepop.CurrDiapo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "session")
public class Session {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "nom", nullable = true)
    private String nom;

    @JsonIgnore
    @OneToMany(mappedBy="session", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Diapo> diapos;

    @JsonIgnoreProperties("session")
    @ManyToOne
    @JoinColumn(name="utilisateur_id", nullable = false)
    private Utilisateur utilisateur;

    public Session() {
        super();
    }

    public Session(long id, String nom, Utilisateur utilisateur) {
        super();
        this.id = id;
        this.nom = nom;
        this.utilisateur = utilisateur;
        this.diapos=new ArrayList<Diapo>();
    }

    public Session(String nom, Utilisateur utilisateur) {
        super();
        this.nom = nom;
        this.utilisateur = utilisateur;
        this.diapos=new ArrayList<Diapo>();
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
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

    public List<Diapo> getDiapos() {
        return diapos;
    }

    public void setDiapos(List<Diapo> diapos) {
        this.diapos = diapos;
    }

    public void addDiapo() {
        diapos.add(new Diapo());
    }
}
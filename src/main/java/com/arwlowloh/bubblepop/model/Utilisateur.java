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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "utilisateur")
public class Utilisateur {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "nom", nullable = false)
    private String nom;

    @Column(name = "mot_de_passe", nullable = false)
    private String mot_de_passe;

    @Column(name = "role", nullable = false)
    private String role;

    @ManyToOne
    @JoinColumn(name="organisation_id")
    private Organisation organisation;

    @JsonIgnore
    @OneToMany(mappedBy="utilisateur")
    private List<Session> sessions;

    public Utilisateur() {
        super();
    }

    public Utilisateur(String nom, String mot_de_passe, String role) {
        super();
        this.nom = nom;
        this.mot_de_passe = mot_de_passe;
        this.role = role;
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

    public String getMot_de_passe() {
        return mot_de_passe;
    }

    public void setMot_de_passe(String mot_de_passe) {
        this.mot_de_passe = mot_de_passe;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Organisation getOrganisation() {
        return organisation;
    }

    public void setOrganisation(Organisation organisation) {
        this.organisation = organisation;
    }

    public List<Session> getSessions() {
        return sessions;
    }

    public void setSessions(List<Session> sessions) {
        this.sessions = sessions;
    }
}
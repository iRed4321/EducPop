package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.arwlowloh.bubblepop.model.Utilisateur;

public class CurrentSession {
    Utilisateur utilisateur;
    String nom;
    private HashMap<String, Integer> bulles;
    private List<String> questions;

    public CurrentSession(Utilisateur utilisateur, String nom) {
        this.utilisateur = utilisateur;
        this.nom = nom;
        this.bulles = new HashMap<>();
        this.questions = new ArrayList<>();
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public HashMap<String, Integer> getBulles() {
        return bulles;
    }

    public List<String> getQuestions() {
        return questions;
    }

    public String getNom() {
        return nom;
    }
}
package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.tools.Diagnostic;

import com.arwlowloh.bubblepop.model.Diapo;
import com.arwlowloh.bubblepop.model.Utilisateur;

public class CurrentSession {

    Utilisateur utilisateur;
    String nom;
    private List<CurrDiapo> diapos;
    private int currDiapo = 0;

    public CurrentSession(Utilisateur utilisateur, String nom) {
        this.utilisateur = utilisateur;
        this.nom = nom;
        this.diapos = new ArrayList<>();
        diapos.add(new CurrDiapo());
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public String getNom() {
        return nom;
    }

    public CurrDiapo getCurrentDiapo() {
        return diapos.get(currDiapo);
    }

    public void addDiapo() {
        diapos.add(new CurrDiapo());
    }

    public void setCurrentDiapo(int currDiapo) {
        this.currDiapo = currDiapo;
    }

    public HashMap<String, Integer> getBulles() {
        return diapos.get(currDiapo).getBulles();
    }

    public List<String> getQuestions() {
        return diapos.get(currDiapo).getQuestions();
    }

    public List<CurrDiapo> getDiapos() {
        return diapos;
    }


}
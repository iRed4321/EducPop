package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.arwlowloh.bubblepop.model.Session;
import com.arwlowloh.bubblepop.model.Utilisateur;

public class CurrentSession {

    Utilisateur utilisateur;
    Boolean readOnly = false;
    String nom;
    private List<CurrDiapo> diapos;
    private int currDiapo = 0;
    Long dbId = null;

    CurrentSession(Utilisateur utilisateur, String nom) {
        this.utilisateur = utilisateur;
        this.nom = nom;
        this.diapos = new ArrayList<>();
        diapos.add(new CurrDiapo());
    }

    CurrentSession(Session session){
        this.utilisateur = session.getUtilisateur();
        this.nom = session.getNom();
        this.diapos = new ArrayList<>();
        this.dbId = session.getId();
        for (int i = 0; i < session.getDiapos().size(); i++) {
            diapos.add(new CurrDiapo(session.getDiapos().get(i)));
        }

    }

    /**
     * 
     * @return l'utilisateur ayant créé la session
     */
    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    /**
     * 
     * @return le nom de la session
     */
    public String getNom() {
        return nom;
    }

    /**
     * 
     * @return la diapo en cours
     */
    public CurrDiapo getCurrentDiapo() {
        return diapos.get(currDiapo);
    }

    /**
     * Ajoute une diao à la liste des diapos
     */
    public void addDiapo() {
        diapos.add(new CurrDiapo());
    }

    /**
     * Permet de définir la diapo en cours
     * @param currDiapo l'indice de la diapo à définir comme courante
     */
    public void setCurrentDiapo(int currDiapo) {
        this.currDiapo = currDiapo;
    }

    /**
     * Permet d'obtenir la liste des mots de la diapo en cours
     * @return
     */
    public HashMap<String, Integer> getBulles() {
        return diapos.get(currDiapo).getBulles();
    }

    /**
     * Permet d'obtenir la liste des questions de la diapo en cours
     * @return
     */
    public List<String> getQuestions() {
        return diapos.get(currDiapo).getQuestions();
    }

    /**
     * Permet d'oobtenir la liste des diapos
     */
    public List<CurrDiapo> getDiapos() {
        return diapos;
    }


}
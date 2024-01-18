package com.arwlowloh.bubblepop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "bulle")
public class Bulle {

    @Id
    @GeneratedValue
    private long id;


    @Column(name = "mot", nullable = false)
    private String mot;

    @Column(name = "taille", nullable = false)
    private int taille;

    @ManyToOne
    @JoinColumn(name="diapo_id")
    private Diapo diapo;

    public Bulle() {
        super();
    }

    public Bulle(Diapo diapo, String mot, int taille) {
        super();
        this.diapo=diapo;
        this.taille=taille;
        this.mot=mot;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMot() {
        return mot;
    }

    public void setMot(String mot) {
        this.mot = mot;
    }

    public int getTaille() {
        return taille;
    }

    public void setTaille(int taille) {
        this.taille = taille;
    }

    public Diapo getDiapo() {
        return diapo;
    }

    public void setDiapo(Diapo diapo) {
        this.diapo = diapo;
    }
}
package com.arwlowloh.bubblepop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import java.util.List;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "message", nullable = false)
    private String message;

    @ManyToOne
    @JoinColumn(name="diapo_id")
    private Diapo diapo;

    public Question() {
        super();
    }

    public Question(long id, String message, Diapo diapo) {
        super();
        this.id = id;
        this.message = message;
        this.diapo = diapo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Diapo getDiapo() {
        return diapo;
    }

    public void setDiapo(Diapo diapo) {
        this.diapo = diapo;
    }
}
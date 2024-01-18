package com.arwlowloh.bubblepop.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "diapo")
public class Diapo {

    @Id
    @GeneratedValue
    private long id;

    @JsonIgnore
    @OneToMany(mappedBy="diapo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Bulle> bulles;

    @JsonIgnore
    @OneToMany(mappedBy="diapo", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Question> questions;

    @ManyToOne
    @JoinColumn(name="session_id")
    private Session session;

    public Diapo() {
        super();
    }

    public Diapo(Session session) {
        super();
        this.session=session;
    }

    public Diapo(List<Bulle> bulles, List<Question> questions) {
        super();
        this.bulles = bulles;
        this.questions = questions;
    }


    public List<Bulle> getBulles() {
        return bulles;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

}

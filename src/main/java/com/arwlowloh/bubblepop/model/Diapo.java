package com.arwlowloh.bubblepop.model;

import java.util.List;

import jakarta.persistence.Entity;
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

    @OneToMany(mappedBy="diapo")
    private List<Bulle> bulles;

    @OneToMany(mappedBy="diapo")
    private List<Question> questions;

    @ManyToOne
    @JoinColumn(name="session_id")
    private Session session;

    public Diapo() {
        super();
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

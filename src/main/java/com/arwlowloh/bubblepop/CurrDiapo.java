package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.arwlowloh.bubblepop.model.Bulle;
import com.arwlowloh.bubblepop.model.Diapo;
import com.arwlowloh.bubblepop.model.Question;

public class CurrDiapo {
    private HashMap<String, Integer> bulles = new HashMap<>();
    private List<String> questions = new ArrayList<>();

    /**
     * @return la liste des mots de la diapo et leurs occurrences
     */
    public HashMap<String, Integer> getBulles() {
        return bulles;
    }

    /**
     * @return la liste des questions de la diapo
     */
    public List<String> getQuestions() {
        return questions;
    }

    CurrDiapo() {
        super();
    }

    CurrDiapo(Diapo diapo){
        super();
        for (Question q : diapo.getQuestions()) {
            questions.add(q.getMessage());
        }
        for (Bulle b : diapo.getBulles()) {
            bulles.put(b.getMot(), b.getTaille());
        }
    }


    /**
     * Permet de changer une diapo en cours en une diapo enregistrable dans la base de données
     */
    public Diapo convert(){
        Diapo diapo = new Diapo(new ArrayList<>(), new ArrayList<>());
        
        for (String q : questions) {
            Question question = new Question();
            question.setDiapo(diapo);
            question.setMessage(q);
            diapo.getQuestions().add(question);
        }

        for (Map.Entry<String,Integer> w : bulles.entrySet()) {
            Bulle bulle = new Bulle();
            bulle.setMot(w.getKey());
            bulle.setTaille(w.getValue());
            diapo.getBulles().add(bulle);
        }

        return diapo;
    }
}

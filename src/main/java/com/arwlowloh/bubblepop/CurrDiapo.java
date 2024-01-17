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

    public HashMap<String, Integer> getBulles() {
        return bulles;
    }

    public List<String> getQuestions() {
        return questions;
    }

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

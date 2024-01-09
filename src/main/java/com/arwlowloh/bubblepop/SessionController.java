package com.arwlowloh.bubblepop;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.javatuples.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.sqids.Sqids;

import com.arwlowloh.bubblepop.model.Bulle;
import com.arwlowloh.bubblepop.model.Question;
import com.arwlowloh.bubblepop.model.Session;
import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.BulleRepository;
import com.arwlowloh.bubblepop.repositories.QuestionRepository;
import com.arwlowloh.bubblepop.repositories.SessionRepository;

@RestController
public class SessionController {

    @Autowired
    SessionRepository repo;

    @Autowired
    QuestionRepository questionRepo;

    @Autowired
    BulleRepository bulleRepo;

    private final HashMap<String, CurrentSession> sessions = new HashMap<>();
    Sqids sqids = Sqids.builder().minLength(5).build();
 
    @GetMapping("/session/join")
    public String join(@RequestParam(required = false) String id) {

        if (id == null) {
            return "Session ID is empty";
        } else {

            CurrentSession session = sessions.get(id);

            if (session == null) {
                return "Session " + id + " not found";
            } else {
                return "Session " + id + " joined";
            }
        }
    }

    @GetMapping("/session/close/{id}")
    public String end(@PathVariable String id) {
        
        CurrentSession session = sessions.get(id);

        if (session == null) {
            return "Session " + id + " not found";
        } else {

            Session truc = new Session();
            truc.setNom(session.getNom());
            truc.setUtilisateur(session.getUtilisateur());

            Session saved = repo.save(truc);

            for (String q : session.getQuestions()) {

                Question question = new Question();
                question.setSession(saved);
                question.setMessage(q);

                questionRepo.save(question);
            }

            for (Map.Entry<String,Integer> w : session.getBulles().entrySet()) {
                Bulle savedBulle = new Bulle();
                savedBulle.setMot(w.getKey());
                savedBulle.setTaille(w.getValue());

                bulleRepo.save(savedBulle);
            }

            sessions.remove(id);
            return "Session " + id + " closed";
        }

    }

    @GetMapping("/session/open")
    public String createSession(@RequestParam(required = false) String userName, @RequestParam(required = false) String sessionName) {

        if (userName == null || userName.isEmpty()) {
            return "name is empty, there must be a user creating this session";
        }

        if (sessionName == null || sessionName.isEmpty()) {
            return "session name isn't set";
        }

        Utilisateur user = new Utilisateur(userName, "pass", "role");

        long rd = (long) (Math.random() * 1000000000);

        String id = sqids.encode(List.of(rd));

        sessions.put(id, new CurrentSession(user, sessionName));

        return "Session " + id + " created";
    }

    @GetMapping("/session/{id}/update")
    public Pair<List<String>, HashMap<String, Integer>> update(@PathVariable String id) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return null;
        }

        return Pair.with(session.getQuestions(), session.getBulles());
    }
 

    @GetMapping("/session/{id}")
    public String getQuestion(
        @PathVariable String id,
        @RequestParam(required = false) String question,
        @RequestParam(required = false) String word
    ) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return "Session " + id + " not found";
        } else {

            if (question != null && word != null) {
                return "Can't send both question and word";
            }

            if (question != null && !question.isEmpty()) {
                session.getQuestions().add(question);
            }
            if (word != null && !word.isEmpty()) {
                if (session.getBulles().get(word) == null) {
                    session.getBulles().put(word, 1);
                } else {
                    session.getBulles().put(word, session.getBulles().get(word) + 1);
                }
            }

            String result = "Questions :<br>";

            for (String q : session.getQuestions()) {
                result += q + "<br>";
            }

            result += "<br>Words :<br>";
            for (String w : session.getBulles().keySet()) {
                result += w + " : " + session.getBulles().get(w) + "<br>";
            }

            return result;
        }
    }

    @GetMapping("/session/list")
    public String listSessions() {

        String result = "";

        for (CurrentSession session : sessions.values()) {
            result += "Session made by " + session.getUtilisateur().getNom() + "\n";
        }

        return result;
    }

}
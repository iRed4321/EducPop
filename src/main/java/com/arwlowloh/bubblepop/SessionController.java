package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.javatuples.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.sqids.Sqids;

import com.arwlowloh.bubblepop.model.Diapo;
import com.arwlowloh.bubblepop.model.Session;
import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.SessionRepository;

@RestController
public class SessionController {

    @Autowired
    SessionRepository repo;

    private final HashMap<String, CurrentSession> sessions = new HashMap<>();
    Sqids sqids = Sqids.builder().minLength(5).build();
 
    @GetMapping("/session/join")
    public ResponseEntity<Optional<String>> join(@RequestParam(required = false) String id) {

        if (id == null) {
            return new ResponseEntity<>(Optional.of("id is empty"), HttpStatus.BAD_REQUEST);
        } else {

            CurrentSession session = sessions.get(id);

            if (session == null) {
                return new ResponseEntity<>(Optional.of("Session " + id + " not found"), HttpStatus.BAD_REQUEST);
            } else {
                return new ResponseEntity<>(Optional.empty(), HttpStatus.OK);
            }
        }
    }

    @GetMapping("/session/{id}/close")
    public ResponseEntity<Optional<String>> end(@PathVariable String id) {
        
        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>(Optional.of("Session " + id + " not found"), HttpStatus.BAD_REQUEST);
        } else {

            Session dbSession = new Session();
            dbSession.setNom(session.getNom());
            dbSession.setUtilisateur(session.getUtilisateur());

            List<Diapo> diapos = new ArrayList<>();
            for (CurrDiapo diapo : session.getDiapos()) {
                Diapo dbDiapo = diapo.convert();
                dbDiapo.setSession(dbSession);
                diapos.add(dbDiapo);
            }

            dbSession.setDiapos(diapos);

            repo.save(dbSession);

            sessions.remove(id);
            return new ResponseEntity<>(Optional.empty(), HttpStatus.OK);
        }

    }

    @GetMapping("/session/open")
    public ResponseEntity<String> createSession(@RequestParam(required = false) String userName, @RequestParam(required = false) String sessionName) {

        if (userName == null || userName.isEmpty()) {
            return new ResponseEntity<String>("name is empty, there must be a user creating this session", HttpStatus.BAD_REQUEST);
        }

        if (sessionName == null || sessionName.isEmpty()) {
            return new ResponseEntity<String>("session name isn't set", HttpStatus.BAD_REQUEST);
        }

        Utilisateur user = new Utilisateur(userName, "pass", "role");

        long rd = (long) (Math.random() * 1000000000);

        String id = sqids.encode(List.of(rd));

        sessions.put(id, new CurrentSession(user, sessionName));

        return new ResponseEntity<String>(id, HttpStatus.OK);
    }

    @GetMapping("/session/{id}/update")
    public Pair<List<String>, HashMap<String, Integer>> update(@PathVariable String id) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return null;
        }
        
        return Pair.with(session.getQuestions(), session.getBulles());
    }

    @GetMapping("/session/{id}/newDiapo")
    public ResponseEntity<Optional<String>> newDiapo(@PathVariable String id) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>(Optional.of("Session " + id + " not found"), HttpStatus.BAD_REQUEST);
        } else {
            session.addDiapo();
            return new ResponseEntity<>(Optional.empty(), HttpStatus.OK);
        }
    }

    @GetMapping("/session/{id}/setDiapo")
    public ResponseEntity<Optional<String>> setDiapo(@PathVariable String id, @RequestParam int diapo) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>(Optional.of("Session " + id + " not found"), HttpStatus.BAD_REQUEST);
        } else {
            session.setCurrentDiapo(diapo);
            return new ResponseEntity<>(Optional.empty(), HttpStatus.OK);
        }
    }
 
    @GetMapping("/session/{id}/data")
    public ResponseEntity<Optional<String>> receiveData(
        @PathVariable String id,
        @RequestParam(required = false) String question,
        @RequestParam(required = false) String word
    ) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>(Optional.of("Session " + id + " not found"), HttpStatus.BAD_REQUEST);
        } else {

            if (question != null && word != null) {
                return new ResponseEntity<>(Optional.of("You can't send both a question and a word at the same time"), HttpStatus.BAD_REQUEST);
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

            return new ResponseEntity<>(Optional.empty(), HttpStatus.OK);
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
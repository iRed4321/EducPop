package com.arwlowloh.bubblepop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.javatuples.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.sqids.Sqids;

import com.arwlowloh.bubblepop.controllers.AuthController;
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
    
    @Autowired
    AuthController authController;

    /**
     * Permet de clore une session et de l'enregistrer dans la base de données
     * @param id l'identifiant de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant un message en cas d'erreur
     */
    @GetMapping("/session/{id}/close")
    public ResponseEntity<?> end(@PathVariable String id, @RequestParam(required = false) String token) {
        
        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        } 

        Utilisateur user = authController.loginFromToken(token);

        if (user == null || user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        Session dbSession = new Session();
        dbSession.setNom(session.getNom());
        dbSession.setUtilisateur(session.getUtilisateur());
        if (session.dbId != null) {
            dbSession.setId(session.dbId);
        }

        List<Diapo> diapos = new ArrayList<>();
        for (CurrDiapo diapo : session.getDiapos()) {
            Diapo dbDiapo = diapo.convert();
            dbDiapo.setSession(dbSession);
            diapos.add(dbDiapo);
        }

        dbSession.setDiapos(diapos);

        repo.save(dbSession);

        sessions.remove(id);
        return ResponseEntity.ok(null);

    }

    /**
     * Permet de créer une nouvelle session
     * @param sessionName le nom de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant l'identifiant de la session
     */
    @GetMapping("/session/open")
    public ResponseEntity<?> createSession(@RequestParam(required = false) String sessionName, @RequestParam(required = false) String token) {

        Utilisateur user = authController.loginFromToken(token);

        if (user == null) {
            return new ResponseEntity<>("You must be logged in to create a session", HttpStatus.UNAUTHORIZED);
        }

        long rd = (long) (Math.random() * 1000000000);

        String id = sqids.encode(List.of(rd));

        sessions.put(id, new CurrentSession(user, sessionName));

        return ResponseEntity.ok(id);
    }

    /**
     * Permet de récupérer les données d'une session
     * @param id l'identifiant de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant les données de la session
     */
    @GetMapping("/session/{id}/update")
    public ResponseEntity<?> update(@PathVariable String id, @RequestParam(required = false) String token) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        }

        Utilisateur user = authController.loginFromToken(token);

        if (user == null || user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        if (user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You can't access this session results", HttpStatus.UNAUTHORIZED);
        }

        return ResponseEntity.ok(Pair.with(session.getQuestions(), session.getBulles()));
    }

    /**
     * Permet de créer une nouvelle diapo
     * @param id l'identifiant de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant un message en cas d'erreur
     */
    @GetMapping("/session/{id}/newDiapo")
    public ResponseEntity<?> newDiapo(@PathVariable String id, @RequestParam(required = false) String token) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        } 

        Utilisateur user = authController.loginFromToken(token);

        if (user == null || user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        if (user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        session.addDiapo();
        return ResponseEntity.ok(null);

    }

    /**
     * Permet de définir la diapo suivante
     * @param id l'identifiant de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant un message en cas d'erreur
     */
    @GetMapping("/session/{id}/nextDiapo")
    public ResponseEntity<?> nextDiapo(@PathVariable String id, @RequestParam(required = false) String token) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        } 

        Utilisateur user = authController.loginFromToken(token);

        if (user == null || user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        if (user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        session.nextDiapo();
        return ResponseEntity.ok(null);
    }

    /**
     * Permet de définir la diapo précédente
     * @param id l'identifiant de la session
     * @param token le token JWT de l'utilisateur
     * @return ResponseEntity contenant un message en cas d'erreur
     */
    @GetMapping("/session/{id}/prevDiapo")
    public ResponseEntity<?> prevDiapo(@PathVariable String id, @RequestParam(required = false) String token) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        } 

        Utilisateur user = authController.loginFromToken(token);

        if (user == null || user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        if (user.getId() != session.getUtilisateur().getId()) {
            return new ResponseEntity<>("You are not the owner of this session", HttpStatus.UNAUTHORIZED);
        }

        session.prevDiapo();
        return ResponseEntity.ok(null);
    }


 
    /**
     * Permet de recevoir les données envoyées par les participants
     * @param id l'identifiant de la session
     * @param question la question envoyée par un participant
     * @param word le mot envoyé par un participant
     * @return ResponseEntity contenant un message en cas d'erreur
     */
    @GetMapping("/session/{id}/data")
    public ResponseEntity<?> receiveData(
        @PathVariable String id,
        @RequestParam(required = false) String question,
        @RequestParam(required = false) String word
    ) {

        CurrentSession session = sessions.get(id);

        if (session == null) {
            return new ResponseEntity<>("Session " + id + " not found", HttpStatus.BAD_REQUEST);
        } else {

            if(session.readOnly){
                return new ResponseEntity<>("Session " + id + " is read only", HttpStatus.BAD_REQUEST);
            }

            if (question != null && word != null) {
                return new ResponseEntity<>("You can't send both a question and a word at the same time", HttpStatus.BAD_REQUEST);
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

            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/session/saved")
    public ResponseEntity<?> savedlist(@RequestParam(required = false) String token) {

        Utilisateur user = authController.loginFromToken(token);
        List<Session> sessionsdb = user.getSessions();

        List<CurrentSession> curr = new ArrayList<>();

        /*for (Session sessdb : sessionsdb){
            CurrentSession sess = new CurrentSession(sessdb);
            sess.readOnly = true;
            curr.add(sess);
        }*/

        return ResponseEntity.status(HttpStatus.OK).body(sessionsdb);
    }

    @GetMapping("/session/saved/load")
    public ResponseEntity<?> load(@RequestParam(required = false) String token, @RequestParam long id) {

        Utilisateur user = authController.loginFromToken(token);
        List<Session> savedSessions = user.getSessions();

        for (Session session : savedSessions) {
            if (session.getId() == id) {
                long rd = (long) (Math.random() * 1000000000);
                String squidId = sqids.encode(List.of(rd));
                CurrentSession loaded = new CurrentSession(session);
                loaded.readOnly = true;
                sessions.put(squidId, loaded);
        
                return ResponseEntity.ok(squidId);
            }
        }

        return new ResponseEntity<>("Session not found", HttpStatus.BAD_REQUEST);
    }

}
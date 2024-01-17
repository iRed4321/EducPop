package com.arwlowloh.bubblepop.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arwlowloh.bubblepop.model.Utilisateur;
import com.arwlowloh.bubblepop.repositories.UtilisateurRepository;
import com.arwlowloh.bubblepop.security.UserDetailsImpl;
import com.arwlowloh.bubblepop.security.jwt.JwtResponse;
import com.arwlowloh.bubblepop.security.jwt.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
// @CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UtilisateurRepository userRepository;

  // @Autowired
  // RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  /**
   * Cette méthode permet de se connecter à l'application
   * 
   * @param credentials : Map contenant le nom d'utilisateur et le mot de passe
   * @return ResponseEntity contenant le token JWT
   */
  @PostMapping("/perform_login")
  public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(credentials.get("username"), credentials.get("password")));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    String jwt = jwtUtils.generateJwtToken(authentication);
    String isAuth = "non";
    if (authentication.isAuthenticated())
      isAuth = ((UserDetailsImpl) authentication.getPrincipal()).getUtilisateur().getNom();
    return ResponseEntity.ok(new JwtResponse(jwt, isAuth));
  }

  /**
   * Cette méthode permet de vérifier si le token JWT est valide
   * 
   * @param token : token JWT
   * @return ResponseEntity contenant un message d'erreur si le token n'est pas
   *         valide
   */
  @GetMapping("/validateToken")
  public ResponseEntity<?> validateToken(@RequestParam String token) {
    // Validate the JWT token
    if (jwtUtils.validateJwtToken(token)) {
      return ResponseEntity.ok("Token is valid");
    } else {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
    }
  }

  /**
   * Cette méthode permet de récupérer l'utilisateur connecté à partir du token
   * JWT
   * 
   * @param token : token JWT
   * @return Utilisateur connecté
   */
  @GetMapping("/loginFromToken")
  public Utilisateur loginFromToken(@RequestParam String token) {
    String username = jwtUtils.getUserNameFromJwtToken(token);
    return userRepository.findByNom(username);
  }


  /**
   * Permet de supprimer un utilisateur ainsi que ses données
   */
  @PostMapping("/removeUtilisateur")
  public ResponseEntity<?> removeUtilisateur(@RequestParam String token) {
    String username = jwtUtils.getUserNameFromJwtToken(token);
    Utilisateur user = userRepository.findByNom(username);
    if (user == null) {
      return ResponseEntity.badRequest().body("Error: User not found!");
    }
    userRepository.delete(user);
    return ResponseEntity.ok("User deleted successfully!");
  }

  /**
   * Cette méthode permet de s'inscrire à l'application
   * 
   * @param credentials : Map contenant le nom d'utilisateur, le mot de passe et la confirmation du mot de passe
   * @return ResponseEntity contenant un message d'erreur si l'inscription n'a pas pu être effectuée, ou un message de succès
   */
  @PostMapping("/perform_signup")
  public ResponseEntity<?> registerUser(@RequestBody Map<String, String> credentials) {
    if (userRepository.existsByNom(credentials.get("username"))) {
      return ResponseEntity
          .badRequest()
          .body("Error: Username is already taken!");
    }

    if (!credentials.get("password").equals(credentials.get("passwordConfirm"))) {
      return ResponseEntity
          .badRequest()
          .body("Error: Password and password Confirm doesn't match!");
    }

    // Create new user's account
    Utilisateur user = new Utilisateur(credentials.get("username"),
        encoder.encode(credentials.get("password")), "USER");

    /*
     * if (strRoles == null) {
     * Role userRole = roleRepository.findByName(ERole.ROLE_USER)
     * .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
     * roles.add(userRole);
     * } else {
     * strRoles.forEach(role -> {
     * switch (role) {
     * case "admin":
     * Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
     * .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
     * roles.add(adminRole);
     * 
     * break;
     * case "mod":
     * Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
     * .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
     * roles.add(modRole);
     * 
     * break;
     * default:
     * Role userRole = roleRepository.findByName(ERole.ROLE_USER)
     * .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
     * roles.add(userRole);
     * }
     * });
     * }
     * 
     * user.setRoles(roles);
     */
    userRepository.save(user);

    return ResponseEntity.ok("User registered successfully!");
  }
}

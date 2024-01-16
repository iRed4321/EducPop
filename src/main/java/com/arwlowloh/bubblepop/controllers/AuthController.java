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
//@CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UtilisateurRepository userRepository;

  //@Autowired
  //RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/perform_login")
  public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(credentials.get("username"), credentials.get("password")));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);
        String isAuth ="non";
        if(authentication.isAuthenticated()) isAuth=((UserDetailsImpl) authentication.getPrincipal()).getUtilisateur().getNom();
        return ResponseEntity.ok(new JwtResponse(jwt, isAuth));
    }

    @GetMapping("/validateToken")
    public ResponseEntity<?> validateToken(@RequestParam String token) {
        // Validate the JWT token
        if (jwtUtils.validateJwtToken(token)) {
            return ResponseEntity.ok("Token is valid");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
        }
    }

    @GetMapping("/loginFromToken")
    public Utilisateur loginFromToken(@RequestParam String token) {
        String username = jwtUtils.getUserNameFromJwtToken(token);
        return userRepository.findByNom(username);
    }

  //@PostMapping("/signup")
  /*public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), 
               signUpRequest.getEmail(),
               encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "mod":
          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);

          break;
        default:
          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }*/
}

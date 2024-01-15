package com.arwlowloh.bubblepop.security.jwt;

public class JwtResponse {
  private String token;
  private String nom;

  public JwtResponse(String accessToken, String nom) {
    this.token = accessToken;
    this.nom = nom;
  }

  public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }
}
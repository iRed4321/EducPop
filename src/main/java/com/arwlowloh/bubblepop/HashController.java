package com.arwlowloh.bubblepop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HashController {
 
    @Autowired
    TokenService tokenService;
 
    @GetMapping("/session/access/{hash}")
    public String link(@PathVariable String hash) {
        return "hash " + (tokenService.checkHash(hash) ? "valid" : "invalid");
    }

    @GetMapping("/session/end/{hash}")
    public String end(@PathVariable String hash) {
        tokenService.invalidateHash(hash);
        return "hash invalidated";
    }

    @GetMapping("/session/create")
    public String createHash() {

        String hash = tokenService.getHash();
        return "Hash: " + hash;
    }
}
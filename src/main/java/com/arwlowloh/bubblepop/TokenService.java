package com.arwlowloh.bubblepop;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

@Service
class TokenService {
    private final Set<String> hashes = new HashSet<String>();

    public String getHash() {
        String hash = java.util.UUID.randomUUID().toString();
        hashes.add(hash);
        return hash;
    }

    public void invalidateHash(String hash) {
        hashes.remove(hash);
    }

    public boolean checkHash(String hash) {
        return hashes.contains(hash);
    }
}
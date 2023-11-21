package com.arwlowloh.bubblepop;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BubblepopApplication {
    private final Logger logger = LoggerFactory.getLogger(BubblepopApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(BubblepopApplication.class, args);
    }
    
}
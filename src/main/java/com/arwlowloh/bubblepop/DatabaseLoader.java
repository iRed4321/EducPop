package com.arwlowloh.bubblepop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CustomerRepository repository;

	public DatabaseLoader(CustomerRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {

        Customer customer = new Customer();

        customer.setFirstName("John");
        customer.setLastName("Smith");

		this.repository.save(customer);
	}
}
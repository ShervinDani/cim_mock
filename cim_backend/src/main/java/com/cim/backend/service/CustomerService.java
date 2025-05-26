package com.cim.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cim.backend.entity.Customer;
import com.cim.backend.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;

	public Customer registerCustomer(Customer newCustomer) {
		return customerRepository.save(newCustomer);
	}
	
	

}

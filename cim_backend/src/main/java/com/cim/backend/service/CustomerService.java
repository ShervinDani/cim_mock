package com.cim.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cim.backend.entity.Address;
import com.cim.backend.entity.Customer;
import com.cim.backend.repository.AdressRepository;
import com.cim.backend.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private AdressRepository adressRepository;

	public Customer registerCustomer(Customer newCustomer) {
		return customerRepository.save(newCustomer);
	}

	public Address registerCustomerAddress(Address address) {
		return adressRepository.save(address);
	}
	
	

}

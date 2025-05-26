package com.cim.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cim.backend.entity.Customer;
import com.cim.backend.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/registerNewCustomer")
	public Customer registerCustomer(Customer newCustomer)
	{
		return customerService.registerCustomer(newCustomer);
	}
}

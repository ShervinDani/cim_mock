package com.cim.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cim.backend.entity.Customer;
import com.cim.backend.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/registerNewCustomer")
	public Customer registerCustomer(@RequestBody Customer newCustomer)
	{
		System.out.println(newCustomer);
		
		return customerService.registerCustomer(newCustomer);
	}
	
	@GetMapping("/getCustomerDetails")
	public Customer getCustomerDetails(@RequestBody long customerId) {
		return customerService.getCustomerDetails(customerId);
		
	}
	
	@PutMapping("/updateCustomer")
	public String updateCustomer(@RequestBody Customer customer) {
		return customerService.updateCustomer(customer);
	}
}

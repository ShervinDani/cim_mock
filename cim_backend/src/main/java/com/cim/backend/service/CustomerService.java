package com.cim.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cim.backend.entity.Address;
import com.cim.backend.entity.Customer;
import com.cim.backend.exception.EntityNotFoundException;
import com.cim.backend.repository.AddressRepository;
import com.cim.backend.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	

	public Customer registerCustomer(Customer newCustomer) {
		return customerRepository.save(newCustomer);
	}
	public Customer getCustomerDetails(Long id) {
		return customerRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Customer Not found of Id "+ id));
	}

	public String updateCustomer(Customer customer) {
		Customer customer1 = customerRepository.findById(customer.getCustomerId()).orElseThrow(() -> new EntityNotFoundException("Customer Not found of Id "+ customer.getCustomerId()));
		
		
		if(customer != null) {
			
			customer1.setEmail(customer.getEmail());
			customer1.setAddress(customer.getAddress());
			
			
		}
		
		customerRepository.save(customer1);
		
		return "Customer Updated Successfully";
		
	}
	
	

}

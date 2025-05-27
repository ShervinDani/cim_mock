package com.cim.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cim.backend.entity.Customer;
import com.cim.backend.entity.Document;
import com.cim.backend.entity.Number;
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
	
	@PostMapping("/uploadDocument")
	public Document uploadDocument(@RequestPart("image") MultipartFile image,@RequestPart("pdf") MultipartFile pdf,@RequestPart("customer") Customer customer) {
		Document document = new Document();
		document.setCustomer(customer);
		try {
			document.setImage(image.getBytes());
			document.setPdf(pdf.getBytes());
			document.setStatus(0);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return customerService.uploadDocument(document);
	}
	
	@GetMapping("/getAllActiveNumber")
	public List<Number> getAllActiveNumber()
	{
		return customerService.getAllActiveNumbers();
	}
	
}

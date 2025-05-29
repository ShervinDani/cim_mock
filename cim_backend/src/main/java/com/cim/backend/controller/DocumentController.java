package com.cim.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cim.backend.entity.Customer;
import com.cim.backend.entity.CustomerDocument;
import com.cim.backend.repository.CustomerDocumentRepository;
import com.cim.backend.repository.CustomerRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DocumentController {

    @Autowired
    private CustomerDocumentRepository documentRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadDocument(@RequestBody CustomerDocument customerDocument) {
        // Ensure the customer exists before saving the document
        Long customerId = customerDocument.getCustomer().getCustomerId();
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + customerId));

        customerDocument.setCustomer(customer);
        documentRepository.save(customerDocument);

        return ResponseEntity.ok("Document uploaded successfully.");
    }
}

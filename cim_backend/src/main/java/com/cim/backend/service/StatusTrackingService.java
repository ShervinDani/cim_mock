package com.cim.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cim.backend.repository.CustomerDocumentRepository;
import com.cim.backend.repository.CustomerRepository;

@Service
public class StatusTrackingService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerDocumentRepository documentRepository;

    public String getCustomerStatus(String phoneNumber) {
        return customerRepository.findByPhoneNumber(phoneNumber)
                .map(customer -> documentRepository.findByCustomer(customer)
                        .map(document -> {
                            int status = document.getStatus();
                            if (status == 0) return "Pending";
                            else if (status == 1) return "Approved";
                            else return "Unknown Status";
                        })
                        .orElse("Document Not Found"))
                .orElse("Rejected");  
    }

}

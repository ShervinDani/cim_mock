package com.cim.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cim.backend.entity.Customer;
import com.cim.backend.entity.CustomerDocument;

@Repository
public interface CustomerDocumentRepository extends JpaRepository<CustomerDocument, Long> {
	Optional<CustomerDocument> findByCustomer(Customer customer);

}

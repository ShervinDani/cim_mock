package com.cim.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cim.backend.entity.Customer;
import com.cim.backend.entity.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long>{
	Optional<Document> findByCustomer(Customer customer);
}
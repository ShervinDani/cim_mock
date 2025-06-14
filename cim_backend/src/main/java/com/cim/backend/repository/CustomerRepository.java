package com.cim.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cim.backend.entity.Customer;
import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Optional<Customer> findByPhoneNumber(String phoneNumber);
	
	boolean existsByPhoneNumber(String phoneNumber);

}

package com.cim.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cim.backend.entity.Address;

@Repository
public interface AdressRepository extends JpaRepository<Address, Long> {

}

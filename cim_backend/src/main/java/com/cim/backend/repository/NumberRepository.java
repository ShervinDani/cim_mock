package com.cim.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cim.backend.entity.Number;
import java.util.List;


@Repository
public interface NumberRepository extends JpaRepository<Number, Long>{
	
	public List<Number> findByStatus(int status);

}

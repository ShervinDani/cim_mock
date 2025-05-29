package com.cim.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.cim.backend.entity.CallHistory;

@Repository
public interface CallHistoryRepository extends JpaRepository<CallHistory, Long>{
	public List<CallHistory> findByUserId(Long id);
}
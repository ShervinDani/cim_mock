package com.cim.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cim.backend.entity.Plan;
import com.cim.backend.repository.PlanRepository;

@Service
public class PlanService {
	
	@Autowired
	private PlanRepository planRepository;
	
	public List<Plan> getAllPlans() {
		return planRepository.findAll();
	}

}

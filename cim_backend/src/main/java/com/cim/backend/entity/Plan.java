package com.cim.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "cim_plan")
@Data
public class Plan {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long planId;
	private String planName;
	private int validity;
	private int sms;
	private int call;
	private int internet;
	private String Description;
	private double price;
}

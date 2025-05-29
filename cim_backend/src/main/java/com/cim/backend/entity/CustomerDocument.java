package com.cim.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cim_document")
public class CustomerDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "image_base64", columnDefinition = "CLOB")
    private String imageBase64;

    @Lob
    @Column(name = "document_base64", columnDefinition = "CLOB")
    private String documentBase64;
    
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customerId")
    private Customer customer;

    @Column(name = "status")
    private int status;

}

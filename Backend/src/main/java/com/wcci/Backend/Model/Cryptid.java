package com.wcci.Backend.Model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cryptid {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;

    public Cryptid(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Cryptid() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}

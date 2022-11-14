package com.wcci.Backend.Repository;

import com.wcci.Backend.Model.Cryptid;
import org.springframework.data.repository.CrudRepository;


public interface CryptidRepository extends CrudRepository<Cryptid, Long> {
}

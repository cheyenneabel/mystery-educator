package com.wcci.Backend.Controller;


import com.wcci.Backend.Model.Cryptid;
import com.wcci.Backend.Repository.CryptidRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class CryptidController {

    private CryptidRepository cryptidRepo;

    public CryptidController(CryptidRepository cryptidRepo) {
        this.cryptidRepo = cryptidRepo;
    }


    //get all
    @GetMapping("/cryptid")
    public Iterable<Cryptid> getAllCryptids(){return cryptidRepo.findAll();}

    //get by id
    @GetMapping("/cryptid/{id}")
    public Cryptid getCryptidById(@PathVariable Long id){
        Optional<Cryptid> cryptid = cryptidRepo.findById(id);
        if (cryptid.isPresent()){
            return cryptid.get();
        }else{
            return null;
        }
    }

    @GetMapping("/random/cryptid")
    public Cryptid getRandomCryptid(){

        // ▼ ▼ ▼ ▼ ▼ ▼ ▼
        int cryptidCount = 7;
        // ▲ ▲ ▲ ▲ ▲ ▲ ▲

        long random = (long)(Math.floor(Math.random()*cryptidCount)+1);
        return cryptidRepo.findById(random).get();
    }


}

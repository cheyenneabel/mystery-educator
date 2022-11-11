package com.wcci.Backend;

import com.wcci.Backend.Model.Cryptid;
import com.wcci.Backend.Repository.CryptidRepository;
import org.springframework.boot.CommandLineRunner;

public class Populator implements CommandLineRunner {

    private CryptidRepository cryptidRepo;

    public Populator(CryptidRepository cryptidRepo) {
        cryptidRepo = cryptidRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        //list of cryptids to include:
        //griffin, bigfoot, Loch Ness Monster, Yeti, Vampire, Thunder Bird,

        //descriptions from wikipedia
        Cryptid griffin = new Cryptid("Griffin", "A legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and sometimes an eagle's talons as its front feet. ");
        cryptidRepo.save(griffin);
        Cryptid bigfoot = new Cryptid("Bigfoot", "A purported ape-like creature said to inhabit the forests of North America. ");
        cryptidRepo.save(bigfoot);
        Cryptid lNMonster = new Cryptid("Loch Ness Monster", "A creature in Scottish folklore that is said to inhabit Loch Ness in the Scottish Highlands. It is often described as large, long-necked, and with one or more humps protruding from the water.");
        cryptidRepo.save(lNMonster);
        Cryptid yeti = new Cryptid("Yeti", "An ape-like creature purported to inhabit the Himalayan mountain range in Asia. In western popular culture, the creature is commonly referred to as the Abominable Snowman.");
        cryptidRepo.save(yeti);
        Cryptid vampire = new Cryptid("Vampire", "A mythical creature that subsists by feeding on the vital essence (generally in the form of blood) of the living. In European folklore, vampires are undead creatures that often visited loved ones and caused mischief or deaths in the neighbourhoods they inhabited while they were alive.");
        cryptidRepo.save(vampire);
        Cryptid thunderBird = new Cryptid("Thunder Bird", "A legendary creature in certain North American indigenous peoples' history and culture. It is considered a supernatural being of power and strength.");
        cryptidRepo.save(thunderBird);

        //if you add more cryptids, be sure to update the cryptidCount in CryptidController getRandomCryptid()!



    }




}

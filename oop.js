"use strict";

class MusicalInstrument {
    constructor(name, family, isElectricallyOperated, placeOfOrigin, materials) {
        this.name = name;
        this.family = family;
        this.isElectricallyOperated = isElectricallyOperated;
        this.placeOfOrigin = placeOfOrigin;
        this.materials = materials;
    } 

    play() {

    }

    getMaterial() {
        return this.material;
    }

    getFamily() {
        return this.family;
    }


}

class Piano extends MusicalInstrument {

    play() {
        console.log(`${this.name} is playing`);
    }
}

class Guitar extends MusicalInstrument {
    constructor(name, family, isElectricallyOperated, placeOfOrigin,
               type, amplificationMethod, materials) {
        super(name, family, isElectricallyOperated, placeOfOrigin, materials);
        this.type = type;
        this.amplificationMethod = amplificationMethod;
    }

     getType() {
        return this.type;
    }

    play() {
        console.log(`${this.name} is playing..........`);
    }
}


class Drums extends MusicalInstrument{

    constructor(family, isElectricallyOperated, placeOfOrigin, accessories, materials) {
        super(family, isElectricallyOperated, placeOfOrigin, accessories, materials);
        this.accessories = accessories;
    }

    getAccessories() {
        return this.accessories;
    }

    play() {
        console.log(`${this.name} is playing.............`);
    }
}

class Saxophone extends MusicalInstrument {
    play() {
        console.log(`${this.name} is playing.............`);
    }
}

// drive test of the classes

const electric = new Guitar("Electric Guitar", "strings", false, "Italy",
                           "electric", "electricity and amplifier", ["wood"])

const drums = new Drums("percussion", false, "nil", "sticks", ["wood", "aluminium"]);
console.log(electric);
electric.play();
console.log(drums);
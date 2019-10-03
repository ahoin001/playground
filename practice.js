class Human {

    constructor() {

        this.planet = "Earth",
        this.species = "human"

    }

    getSpecies() {
        console.log(`Species is: ${this.species} from planet ${this.planet}`);
      }
    
}

class MaleHuman extends Human{

    constructor() {
        
        super();
        this.gender = "Male"

    }

    theGender() {
        console.log(`Gender : ${this.gender} and planet ${this.planet} `);
      }
    
}

let aHumanMale = new MaleHuman();
aHumanMale.theGender();
aHumanMale.getSpecies();
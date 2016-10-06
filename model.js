function Model() {
    var pets = [];

    this.addPet = function(newPet) {
        pets.push(newPet);
    }


    this.getPetByName = function(name) {
        for (var pet of pets) {
            if (pet.name === name) {
                return pet;
            }
        }
        return null;
    }


    this.getAllPets = function() {
        return pets.slice();
    }
}
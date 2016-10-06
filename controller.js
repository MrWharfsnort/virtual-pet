function Controller(model) {

    this.addPet = function(name) {
        var p = new Pet(name);
        model.addPet(p);
        return p;
    }


    this.playWithPet = function(name, amount) {
        var p = model.getPetByName(name);
        p.play(amount);
        return p;
    }


    this.getAllPets = function() {
        return model.getAllPets();
    }
}
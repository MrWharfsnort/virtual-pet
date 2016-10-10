function Controller(model) {

    this.addPet = function(name) {
        var p = new Pet(name);
        model.addPet(p);
        return p;
    }


    this.addSickPet = function(name) {
        var p = new Pet(name);
        p.hunger = 15;
        p.fun = 15;
        model.addPet(p);
        return p;
    }


    this.playWithPet = function(name, amount) {
        var p = model.getPetByName(name);
        if (p.hunger <= 0) {
            var petIndex = this.getAllPets().indexOf(p);
            model.deletePet(petIndex);
        }
        p.play(amount);
        return p;
    }


    this.feedPet = function(name, amount) {
        var p = model.getPetByName(name);
        p.feed(amount);
        return p;
    }


    this.getAllPets = function() {
        return model.getAllPets();
    }

}
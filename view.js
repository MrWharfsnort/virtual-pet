function View(controller) {
    
    this.createPetHTML = function(pet) {
        var $button = $("<button>Play!</button>");
        
        $button.click(function() {
            controller.playWithPet(pet.name, 10);
            this.showAllPets();
        }.bind(this));

        var $pet = $("<p>" + pet.name + " - hunger: "  + pet.hunger + " | fun: " + pet.fun + " </p>");
        
        $pet.append($button);
        
        return $pet;
    }


    this.showAllPets = function() {
        $('#output').html("");
        
        var allPets = controller.getAllPets();
        
        for (var pet of allPets) {
            var petHTML = this.createPetHTML(pet);
            $('#output').append(petHTML);
        }
    }


    this.createPet = function() {
        var name = $('#petname').val();
        
        controller.addPet(name);
        
        this.showAllPets();
    }
}
function View(controller) {
    
    this.createPetHTML = function(pet) {
        var $playButton = $("<button>Play</button>");
        var $playQty = $("<input id=\"playQty\" type=\"text\"></input>");
        var $feedButton = $("<button>Feed</button>");
        var $foodQty = $("<input id=\"foodQty\" type=\"text\"></input>");
        
        $playButton.click(function() {
            var quantity = parseInt($playQty.val());
            if (quantity) {
                controller.playWithPet(pet.name, quantity);
                this.showAllPets();
            }
        }.bind(this));

        $feedButton.click(function() {
            var quantity = parseInt($foodQty.val());

            if (quantity) {
                controller.feedPet(pet.name, quantity);
                this.showAllPets();
            }
        }.bind(this));

        var $pet = $("<div class=\"pet\">" +
                    "<span class=\"pet-type\">" + pet.type + "</span><h1>" + pet.name + "</h1>" +
                    "<p>hunger: "  + pet.hunger +
                    "</p><p>fun: " + pet.fun + 
                    "</p></div>");
        
        $pet.append($playButton, $playQty, "<br />", $feedButton, $foodQty);
        
        return $pet;
    }

    $('#newpet').click(function() {
        this.createPet();
    }.bind(this));


    $('#sickpet').click(function() {
        this.addSickPet();
    }.bind(this));


    this.showAllPets = function() {
        $('#output').html("");
        var allPets = controller.getAllPets();
        
        for (var pet of allPets) {
            var petHTML = this.createPetHTML(pet);
            $('#output').append(petHTML);
        }
    }


    this.addSickPet = function() {
        var name = $('#petname').val();
        controller.addSickPet(name);
        $('#petname').val('');
        this.showAllPets();
    }


    this.createPet = function() {
        var name = $('#petname').val();
        controller.addPet(name);
        $('#petname').val('');
        this.showAllPets();
    }
}
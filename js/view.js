function View(controller) {
    
    this.createPetHTML = function(pet) {
        var $playButton = $("<button>Play</button>");
        var $playQty = $("<input id=\"playQty\" type=\"text\"></input>");
        var $feedButton = $("<button>Feed</button>");
        var $foodQty = $("<input id=\"foodQty\" type=\"text\"></input>");
        
        $playButton.click(function() {
            var quantity = parseInt($playQty.val());
            if (!quantity) {
                controller.playWithPet(pet.name, 1);
            } else {
                controller.playWithPet(pet.name, quantity);
            }
            this.showAllPets();
        }.bind(this));

        $feedButton.click(function() {
            var quantity = parseInt($foodQty.val());

            if (!quantity) {
                controller.feedPet(pet.name, 1);
            } else {
                controller.feedPet(pet.name, quantity);
            }
            this.showAllPets();
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
        if (!name) {
            name = randomName();
        }
        controller.addSickPet(name);
        $('#petname').val('');
        this.showAllPets();
    }


    this.createPet = function() {
        var name = $('#petname').val();
        if (!name) {
            name = randomName();
        }

        controller.addPet(name);
        $('#petname').val('');
        this.showAllPets();
    }

    function randomName() {
        var nameList = ["Abra", "Absol", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Altaria", "Ampharos", "Anorith", "Arbok", "Arcanine", "Ariados", "Armaldo", "Aron", "Articuno", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barboach", "Bayleef", "Beautifly", "Beedrill", "Beldum", "Bellossom", "Bellsprout", "Blastoise", "Blaziken", "Blissey", "Breloom", "Bulbasaur", "Butterfree", "Cacnea", "Cacturne", "Camerupt", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Chansey", "Charizard", "Charmander", "Charmeleon", "Chikorita", "Chimecho", "Chinchou", "Clamperl", "Claydol", "Clefable", "Clefairy", "Cleffa", "Cloyster", "Combusken", "Corphish", "Corsola", "Cradily", "Crawdaunt", "Crobat", "Croconaw", "Cubone", "Cyndaquil", "Delcatty", "Delibird", "Deoxys", "Dewgong", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Dragonair", "Dragonite", "Dratini", "Drowzee", "Dugtrio", "Dunsparce", "Dusclops", "Duskull", "Dustox", "Eevee", "Ekans", "Electabuzz", "Electrike", "Electrode", "Elekid", "Entei", "Espeon", "Exeggcute", "Exeggutor", "Exploud", "Farfetch'd", "Fearow", "Feebas", "Feraligatr", "Flaaffy", "Flareon", "Flygon", "Forretress", "Furret", "Gardevoir", "Gastly", "Gengar", "Geodude", "Girafarig", "Glalie", "Gligar", "Gloom", "Golbat", "Goldeen", "Golduck", "Golem", "Gorebyss", "Granbull", "Graveler", "Grimer", "Groudon", "Grovyle", "Growlithe", "Grumpig", "Gulpin", "Gyarados", "Hariyama", "Haunter", "Heracross", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-oh", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndour", "Huntail", "Hypno", "Igglybuff", "Illumise", "Ivysaur", "Jigglypuff", "Jirachi", "Jolteon", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Kecleon", "Kingdra", "Kingler", "Kirlia", "Koffing", "Krabby", "Kyogre", "Lairon", "Lanturn", "Lapras", "Larvitar", "Latias", "Latios", "Ledian", "Ledyba", "Lickitung", "Lileep", "Linoone", "Lombre", "Lotad", "Loudred", "Lucario", "Ludicolo", "Lugia", "Lunatone", "Luvdisc", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magikarp", "Magmar", "Magnemite", "Magneton", "Makuhita", "Manectric", "Mankey", "Mantine", "Mareep", "Marill", "Marowak", "Marshtomp", "Masquera", "Mawile", "Medicham", "Meditite", "Meganium", "Meowth", "Metagross", "Metang", "Metapod", "Mew", "Mewtwo", "Mightyena", "Milotic", "Miltank", "Minun", "Misdreavus", "Missingno.", "Moltres", "Mr. Mime", "Mudkip", "Muk", "Munchlax", "Murkrow", "Natu", "Nidoking", "Nidoqueen", "Nidoran", "Nincada", "Ninetales", "Ninjask", "Noctowl", "Nosepass", "Numel", "Nuzleaf", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Paras", "Parasect", "Pelipper", "Persian", "Phanpy", "Pichu", "Pidgeot", "Pidgeotto", "Pidgey", "Pikachu", "Piloswine", "Pineco", "Pinsir", "Plusle", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Ponyta", "Poochyena", "Porygon", "Primeape", "Psyduck", "Pupitar", "Quagsire", "Quilava", "Qwilfish", "Raichu", "Raikou", "Ralts", "Rapidash", "Raticate", "Rattata", "Rayquaza", "Regice", "Regirock", "Registeel", "Relicanth", "Remoraid", "Rhydon", "Rhyhorn", "Roselia", "Sableye", "Salamence", "Sandshrew", "Sandslash", "Sceptile", "Scizor", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Sentret", "Seviper", "Sharpedo", "Shedinja", "Shelgon", "Shellder", "Shiftry", "Shroomish", "Shuckle", "Shuppet", "Silcoon", "Skarmory", "Skiploom", "Skitty", "Slaking", "Slakoth", "Slowbro", "Slowking", "Slowpoke", "Slugma", "Smeargle", "Smoochum", "Sneasel", "Snorlax", "Snorunt", "Snubbull", "Solrock", "Spearow", "Spheal", "Spinarak", "Spinda", "Spoink", "Squirtle", "Stantler", "Starmie", "Staryu", "Steelix", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swalot", "Swampert", "Swellow", "Swinub", "Taillow", "Tangela", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Togepi", "Togetic", "Torchic", "Torkoal", "Totodile", "Trapinch", "Treecko", "Tropius", "Typhlosion", "Tyranitar", "Tyrogue", "Umbreon", "Unown", "Ursaring", "Vaporeon", "Venomoth", "Venonat", "Venusaur", "Vibrava", "Victreebel", "Vigoroth", "Vileplume", "Volbeat", "Voltorb", "Vulpix", "Wailmer", "Wailord", "Walrein", "Wartortle", "Weedle", "Weepinbell", "Weezing", "Whiscash", "Whismur", "Wigglytuff", "Wingull", "Wobbuffet", "Wooper", "Wurmple", "Wynaut", "Xatu", "Yanma", "Zangoose", "Zapdos", "Zigzagoon", "Zubat"];

        return nameList[Math.floor(Math.random() * nameList.length)];
    }
}
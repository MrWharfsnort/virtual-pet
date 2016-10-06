$(document).ready(function() {
    var m = new Model();
    var c = new Controller(m);
    var v = new View(c);

    v.showAllPets();

    $('#newpet').click(function() {
        console.log("new pet");
        v.createPet();
    });
    
});
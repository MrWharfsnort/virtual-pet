function Pet(name) {
    this.name = name;
    this.hunger = 0;
    this.fun = 100;

    this.feed = function(food) {
        this.hunger -= food;
        this.fun -= food / 2;
    }


    this.play = function(fun) {
        this.fun += fun;
        this.hunger += fun / 2;
    }
}
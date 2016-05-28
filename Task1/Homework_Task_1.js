function Animal(age, name, sound, region) {
    this.age = age;
    this.name = name;
    this.sound = sound;
    this.region = region;
};

Animal.prototype.say = function () {
    return this.sound;
};

function Dog() {
};


Dog.prototype = new Animal();
Dog.prototype.goAway = function () {
};

Dog.prototype.constructor = Animal;

function Cat() {
};


Cat.prototype = new Animal();
Cat.prototype.goAway = function () {
};
Cat.prototype.constructor = Animal;

function Woodpecker() {
};


Woodpecker.prototype = new Animal();
Woodpecker.prototype.goAway = function () {
};
Woodpecker.prototype.constructor = Animal;


function Dog() {
};


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.goAway = function () {
};
Dog.prototype.constructor = Animal;

function Cat() {
};


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.goAway = function () {
};
Cat.prototype.constructor = Animal;

function Woodpecker() {
};


Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.goAway = function () {
};
Woodpecker.prototype.constructor = Animal;

var abstractAnimal = new Animal(4, 'abstract', 'Huh', 1);
abstractAnimal.say();

var dog = new Dog();
dog.sound = 'Gav';
dog.say();

var cat = new Cat();
cat.sound = 'Meow';
cat.say();

var woodpecker = new Woodpecker();
woodpecker.sound = 'Tuk-tuk';
woodpecker.say();


function getType(param) {
    if (Cat.prototype.isPrototypeOf(param)) {
        return "Cat";
    } else if (Dog.prototype.isPrototypeOf(param)) {
        return "Dog";
    } else if (Woodpecker.prototype.isPrototypeOf(param)) {
        return "Woodpecker"
    }
    else return "undefined";

}

console.log(getType(cat));
console.log(getType(dog));
console.log(getType(woodpecker));

function getTypeThis() {
    if (Cat.prototype.isPrototypeOf(this)) {
        return "Cat";
    } else if (Dog.prototype.isPrototypeOf(this)) {
        return "Dog";
    } else if (Woodpecker.prototype.isPrototypeOf(this)) {
        return "Woodpecker"
    }
    else return "undefined";

}

var newDog = new Dog();
console.log(getTypeThis.apply(newDog));

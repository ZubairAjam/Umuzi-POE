class Animal {
	constructor(name) {
		this.name = name;
	}
	eats() {
		return "Food";
	}
}
class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	sounds() {
		return "Bark";
	}
}
class Cat extends Animal {
	constructor(name) {
		super(name);
	}
	sounds() {
		return "Meow";
	}
}
class Home {
	constructor() {
		this.pets = [];
	}
	adoptPet(pet) {
		if (this.pets.includes(pet)) {
			throw new Error("Not ok at all.");
		} else {
			this.pets.push(pet);
		}
	}
	makeAllSounds() {
		let makeSounds = [];
		for (let i = 0; i < this.pets.length; i++) {
			makeSounds.push(this.pets[i].sounds());
		}
		return makeSounds.join("\n");
	}
}

module.exports = { Dog, Cat };

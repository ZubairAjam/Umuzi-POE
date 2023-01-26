const { Dog, Cat } = require("../src/animals");
const dog = new Dog();
const cat = new Cat();
describe("Eats method for Dog class", function () {
	it("should return 'Food'.", () => {
		expect(dog.eats()).toBe("Food");
	});
});
describe("Sounds method for Dog class", function () {
	it("should return 'Bark'.", () => {
		expect(dog.sounds()).toBe("Bark");
	});
});
describe("Eats method for Cat class", function () {
	it("should return 'Food'.", () => {
		expect(cat.eats()).toBe("Food");
	});
});
describe("Sounds method for Cat class", function () {
	it("should return 'Meow'. ", () => {
		expect(cat.sounds()).toBe("Meow");
	});
});

class Person {
    constructor(name, age, gender, interests) {
        this.firstName = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        
    }
    hello() {
        let sentence = ("Hello, my name is " + this.firstName + " and I am a " + this.age + " year old " + this.gender + ".");
        if ((this.interests == undefined)||(this.interests.length == 0)) {
            sentence += " I don't have any interests.";
        }
        else if (this.interests.length > 1) {
            let lastInterest = this.interests.pop();
            sentence += " My interests are " + this.interests.join(", ") + " and " + lastInterest + ".";
        }
        else if (this.interests.length = 1) {
            let lastInterest = this.interests.pop();
            sentence += " My interest is " + lastInterest + ".";
        }
        return sentence;
    } 
}
let person = new Person ("Zubair", 25, "male");
let greeting = person.hello();
console.log(greeting);
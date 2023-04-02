// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        let output = ""
        this.sex == "male" ?
            output = `It's me! ${this.name}, the parrot!` :
            output = `${this.name} says squawk!`
        return output
    }
}

const bird = new Bird("Pablo", "male")
const bird2 = new Bird("Mable", "female")


class Car {
    constructor(name){
        this.name = name
    }

    run(city){
        console.log(`I will go to ${city} in my ${this.name}`)
    }
}

module.exports = Car
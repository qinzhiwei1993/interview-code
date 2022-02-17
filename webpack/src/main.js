const fn1 = function(){
    console.log('fn1')
}

const fn2 = function(){
    console.log('fn1')
}


class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');

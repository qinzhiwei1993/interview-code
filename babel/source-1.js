const Car = require('./source-2')

const test = () => {
    console.log('babel transform test')
}

const test2 = () => {
    const car = new Car('五菱宏光')
    car.run('邯郸')
}

const a = new Promise()
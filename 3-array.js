// 数组相关

let arr = [1, 2, 3, 4, 5, 6]
// 有一项为true，则为true
let someBol = arr.some(item => item === 2)
// 有一项为false，则为false
let every = arr.every(item => item !== 7)
console.log(someBol)
console.log(every)

let sum = arr.reduce((pre, cur) => {
    return pre + cur
}, 0)

console.log(sum)

// 数组拆解
Array.prototype.flat = function () {
    return this.toString().split(',').map(item => +item)
}

let arr2 = [1, [2, 3, [4, 5]]]
console.log(arr2.flat())

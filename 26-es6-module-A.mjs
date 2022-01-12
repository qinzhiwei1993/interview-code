// ES6模块
import { stat, exists, readFile } from 'fs';

console.log(stat, exists, readFile)
console.log(this); // undefined
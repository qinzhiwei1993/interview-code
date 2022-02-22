"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var Car = require('./source-2');

var test = function test() {
  console.log('babel transform test');
};

var test2 = function test2() {
  var car = new Car('五菱宏光');
  car.run('邯郸');
};

var a = new Promise();
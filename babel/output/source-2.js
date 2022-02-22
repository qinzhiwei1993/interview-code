"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.concat.js");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Car = /*#__PURE__*/function () {
  function Car(name) {
    this.name = name;
  }

  (0, _createClass2.default)(Car, [{
    key: "run",
    value: function run(city) {
      console.log("I will go to ".concat(city, " in my ").concat(this.name));
    }
  }]);
  return Car;
}();

module.exports = Car;
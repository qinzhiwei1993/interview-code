(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myBundle = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  var name = "rollup-demo";
  var version = "1.0.0";
  var description = "";
  var main$1 = "index.js";
  var scripts = {
  	test: "echo \"Error: no test specified\" && exit 1",
  	build: "rollup -c"
  };
  var author = "";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.17.5",
  	"@babel/preset-env": "^7.16.11",
  	"@rollup/plugin-babel": "^5.3.0",
  	"@rollup/plugin-json": "^4.1.0",
  	rollup: "^2.68.0",
  	"rollup-plugin-terser": "^7.0.2"
  };
  var packageJson = {
  	name: name,
  	version: version,
  	description: description,
  	main: main$1,
  	scripts: scripts,
  	author: author,
  	license: license,
  	devDependencies: devDependencies
  };

  console.log(packageJson); // const a = new Promise()

  var B = /*#__PURE__*/function () {
    function B(name) {
      _classCallCheck(this, B);

      this.name = name;
    }

    _createClass(B, [{
      key: "run",
      value: function run() {
        console.log(this.name);
      }
    }]);

    return B;
  }();

  var b = new B('haha');
  b.run();
  function main () {
    console.log(foo);
  } // 动态导入，代码分割
  // export default function () {
  //     import('./foo.js').then(({ default: foo }) => console.log(foo));
  // }

  return main;

}));

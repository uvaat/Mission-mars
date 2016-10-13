(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bord = function () {
	function Bord(squares) {
		_classCallCheck(this, Bord);

		console.log(squares);
		this.squares = squares;
	}

	_createClass(Bord, [{
		key: "drawBord",
		value: function drawBord() {

			for (var i in this.squares) {
				console.log(this.squares[i]);
			}
		}
	}]);

	return Bord;
}();

exports.default = Bord;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Square = function () {
	function Square(height, element) {
		_classCallCheck(this, Square);

		this.height = height;
		this.element = element;
	}

	_createClass(Square, [{
		key: "drawSquare",
		value: function drawSquare() {}
	}]);

	return Square;
}();

exports.default = Square;

},{}],3:[function(require,module,exports){
"use strict";

var _Bord = require("./Bord");

var _Bord2 = _interopRequireDefault(_Bord);

var _Square = require("./Square");

var _Square2 = _interopRequireDefault(_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var level_1 = [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 2], [1, 8], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]];

var squares = [];

for (var i in level_1) {
	var square = new _Square2.default(level_1[i][0], level_1[i][1]);
	squares.push(square);
}

var bord = new _Bord2.default(squares);
bord.drawBord();

},{"./Bord":1,"./Square":2}]},{},[3]);

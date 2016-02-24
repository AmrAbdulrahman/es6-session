"use strict";

var x = 1,
    y = 2,
    z = 3;

var xx = function xx(y) {
    return y + 1;
};

var evens = [1, 2];
var pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});

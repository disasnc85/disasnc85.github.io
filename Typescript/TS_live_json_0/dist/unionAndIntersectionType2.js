"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = undefined;
var matisse = {
    name: "Matisse",
    neow: function () {
        console.log("neow");
    },
};
var monet = {
    name: "Monet",
    neow: function () {
        console.log("neow");
    },
};
var vicky = {
    name: "Vicky",
    neow: function () {
        console.log("neow");
    },
    topSpeed: 50,
};
function runCat(cat) {
    if ("topSpeed" in cat) {
        console.log("".concat(cat.name, " is a fast cat ").concat(cat.topSpeed, " "));
    }
    else {
        console.log("".concat(cat.name, " is a slow cat"));
    }
}
var cats = [matisse, monet, vicky];
cats.forEach(function (cat) { return runCat(cat); });
//# sourceMappingURL=unionAndIntersectionType2.js.map
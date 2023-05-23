"use strict";
var p = {
    name: "Claus",
    livesIn: "milano",
    greet: function (greeting) {
        return "".concat(greeting, " ").concat(this.name);
    },
    age: 0,
};
var e = p;
function doSomething(person) {
    // person.name = "Antonio";
}
doSomething(p);
var c = {
    name: true,
    livesIn: false,
    greet: true,
    age: true,
};
var f = p; // ok
// const g: AllBoolean<Person> = p; // ko
//# sourceMappingURL=index.js.map
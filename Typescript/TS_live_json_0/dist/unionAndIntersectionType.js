"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = undefined;
function greet(greeting) {
    // Type guard
    if (typeof greeting === "string") {
        console.log("Ciao ".concat(greeting));
    }
    else {
        if (greeting.lingua === "it") {
            console.log("Ciao ".concat(greeting.parole.join(" ")));
        }
        if (greeting.lingua === "fr") {
            console.log("Bonjouor ".concat(greeting.parole.join(" ")));
        }
        if (greeting.lingua === "de") {
            console.log("Hallo ".concat(greeting.parole.join(" ")));
        }
    }
}
greet("Claus");
greet({ lingua: "fr", parole: ["Antonio"] });
greet({ lingua: "it", parole: ["Antonio"] });
greet({ lingua: "de", parole: ["Antonio"] });
//# sourceMappingURL=unionAndIntersectionType.js.map
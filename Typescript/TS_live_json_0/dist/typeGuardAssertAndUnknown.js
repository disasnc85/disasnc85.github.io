"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = undefined;
function fetch() {
    return {};
}
function betterFetch(isSuccess) {
    return isSuccess ? { data: "user x" } : { error: "errore" };
}
var apiFetch = function () {
    var rand = Math.round(Math.random() * 10) % 2;
    return betterFetch(rand === 1);
};
function isSuccessResponse(apif) {
    // Fondamentale l'uso di is
    return "data" in apif;
}
var getUser = function () {
    var apif = apiFetch();
    if (isSuccessResponse(apif)) {
        console.log("SuccessResponse: ".concat(apif.data));
    }
    else {
        console.log("Error response: ".concat(apif.error));
    }
};
getUser();
getUser();
getUser();
getUser();
//# sourceMappingURL=typeGuardAssertAndUnknown.js.map
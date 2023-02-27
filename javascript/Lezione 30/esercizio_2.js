const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

/************Quanti giorni hai?************
 Creare un algoritmo che presa in ingresso la data odierna
 e la data di nascita di una qualsiasi persona
 calcoli il numero dei giorni vissuti
 ******************************************/

//togliere la data di oggi meno la data di nascita per sapere quanti giorni abbiamo
//l'espressione è in millisecondi (prova a dividere per 1000)

function countLifeTime(ieri) {
  //console.log(typeof ieri);
  if (ieri instanceof Date) {
    const oggi = new Date();
    const result = Math.floor((oggi - ieri) / 1000 / 60 / 60 / 24);
    /* if (typeof ieri === "string" || typeof oggi === "string") {
    throw Error("Invalid data");
  }*/
    return result;
  }
  throw new Error("Invalid data");
}

/*-------------------------
            TEST
-------------------------*/
describe("Tests", () => {
  it("born yesterday", function () {
    const givenDate = new Date();
    const date = givenDate.getDate();
    givenDate.setDate(date - 1);
    const result = countLifeTime(givenDate);
    assert.equal(result, 1);
  });

  it("born yesterday in the morning", function () {
    const givenDate = new Date();
    const date = givenDate.getDate();
    givenDate.setDate(date - 1);
    givenDate.setHours(3);
    const result = countLifeTime(givenDate);
    assert.equal(result, 1);
  });

  it("Born the day before yesterday", function () {
    const givenDate = new Date();
    const date = givenDate.getDate();
    givenDate.setDate(date - 2);
    const result = countLifeTime(givenDate);
    assert.equal(result, 2);
  });
  it("Born the day before yesterday", function () {
    assert.throw(() => countLifeTime("sono nato ieri"), "Invalid data");
  });
});

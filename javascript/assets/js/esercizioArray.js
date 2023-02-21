/*
Scrivi un programma che dati:
- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuare, una delle seguenti:
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

Esempio:
Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

Consigli:
Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo rigaurda l'esercizio sulle condizioni "Chi l'azzecca?"

-> map(element => ....)
forEach
*/

// array1 = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
// array2 = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];

/* -------------------------
ESEGUITI CON FUNCTION SEMPLICE
------------------------- */
/*
function operazioniTraArray(array1, array2, operazioni) {
  if (array1.length != array2.length) {
    throw Error("Gli array devono avere la stessa lughezza");
  }

  for (var i = 0; i < array1.lenght; i++) {
    if (typeof array1[i] != "number" || typeof array2[i] != "number") {
      throw Error("Gli array devono avere solo numeri");
    }
  }

  var array3 = [];
  for (var n = 0; n < array1.lenght; n++);
  {
    switch (operazioni) {
      case "addizione":
        array3[n] = array1[n] + array2[n];
        break;
      case "sottrazione;":
        array3[n] = array1[n] - array2[n];
        break;
      case "moltiplicazione;":
        array3[n] = array1[n] * array2[n];
        break;
      case "divisione;":
        array3[n] = array1[n] / array2[n];
        break;
      default:
        throw Error("operazione non consentita");
    }

  return array3;
}
}*/
/* -------------------------
ESEGUITI CON FUNCTION METODI (.map)
------------------------- */

function operazioniTraArray(array1, array2, operazioni) {
  if (array1.length != array2.length) {
    throw Error("Gli array devono avere la stessa lughezza");
  }

  return array1.map((value, index) => {
    if (typeof value != "number" || typeof array2[index] != "number") {
      throw Error("Gli array devono avere solo numeri");
    }

    switch (operazioni) {
      case "addizione":
        return value + array2[index];
      case "sottrazione;":
        return value - array2[index];
      case "moltiplicazione;":
        return value * array2[index];
      case "divisione;":
        return value / array2[index];
      default:
        throw Error("operazione non consentita");
    }
  });
}

/*-------------------
Test
-------------------*/
var assert = require("assert");

describe("operazioniTraArrayTest", function () {
  it("realCase", function () {
    var r = operazioniTraArray(
      [3, 7, 2, 5, 8, 1, 2, 5, 6, 4],
      [9, 3, 1, 4, 7, 6, 5, 10, 1, 5],
      "addizione"
    );
    [12, 10, 3, 9, 15, 7, 7, 15, 7, 9].forEach((x, index) => {
      assert.equal(r[index], x);
    });
  });

  it("addizione", function () {
    var r = operazioniTraArray([1, 1], [2, 2], "addizione");
    assert.equal(r[0], 3);
    assert.equal(r[1], 3);
  });

  it("sottrazione", function () {
    var r = operazioniTraArray([1, 1], [2, 2], "sottrazione");
    assert.equal(r[0], -1);
    assert.equal(r[1], -1);
  });

  it("moltiplicazione", function () {
    var r = operazioniTraArray([1, 1], [2, 2], "moltiplicazione");
    assert.equal(r[0], 2);
    assert.equal(r[1], 2);
  });

  it("divisione", function () {
    var r = operazioniTraArray([1, 1], [2, 2], "divisione");
    assert.equal(r[0], 0.5);
    assert.equal(r[1], 0.5);
  });

  it("operazione non consentita", function () {
    assert.throw(
      () => operazioniTraArray([1, 1], [2, 2], "addizione"),
      Error,
      "operazione non consentita"
    );
  });

  it("gli array devono avere la stessa lunghezza", function () {
    assert.throw(
      () => operazioniTraArray([1, 1, 1], [2, 2], "addizione"),
      Error,
      "gli array devono avere la stessa lunghezza"
    );
  });

  it("solo numeri", function () {
    assert.throw(
      () => operazioniTraArray([1, "a"], [2, {}], "addizione"),
      Error,
      "solo numeri"
    );
  });
});

const { expect } = require("chai");
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

/************Crea Persone************
1. Implementa una funzione "createPerson", che prenda 2 argomenti: name and age.
  La funzione deve ritornare una "personObject" che consiste delle due proprieta name and age.
  Il valore di default di age è 18

2. Implementa la function "printPerson" which takes un parametro: array persone
  a)persons should be an array of person objects(from step 1) // verificare che sia un array

  b) La funzione deve stampare all persons from the array person "nicely" as a formatted string
  "Person is called XXX and is YYY years old"
  You can use the console.log() function for this

  3. Call the function whit array ok 2 persons objects that you with createPerson

 ******************************************/

//object contructor function
function Person(name, age) {
  this.age = age;
  this.name = name;
}
//-----------method createPerson (requirement, 1)-----------//
function createPerson(name, age = 37) {
  if (name === undefined) throw Error("Invalid arguments");

  return new Person(name, age);
}

//-----------method printPerson (requirement, 2)-----------//

const printPerson = function (array, externalFormatter) {
  /*//////COBOL < 1995
   let i = 0;
    while (i < array.lenght) {
      result += array[i].name + "is" + array[i].age + "years old" + "\n";
    }*/

  /*////// 1995 ...(STANDARD)
    for (let i = 0; i < array.lenght; i++) {
      result += (array[i].name + " is " + array[i].lenght + " years old") + "\n";
    }*/

  /*////// 2015 >
    for (const element of array) {
      result += element.name + "is" + element.age + "years old" + "\n";
    }*/

  //////2015 ...(Linq) MAP REDUCE

  const format =
    externalFormatter === undefined
      ? (element) => element.name + " is " + element.age + " years old" + "\n"
      : (element) => externalFormatter(element.name, element.age) + "\n";

  return array instanceof Array
    ? array.map(format).reduce((current, prev) => current + prev)
    : "";
};

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
//***********TEST*************//
//\\\\\\\\\\\\\\\\\\\\\\\\\\\//

describe("Tests", () => {
  it("createPerson must return instance of Person", function () {
    const anto = createPerson("Anto", 37);
    assert.equal(anto instanceof Person, true);
  });

  it("createPerson must return instance of Person even when no age is given", function () {
    const anto = createPerson("Anto", 37);
    assert.equal(anto instanceof Person, true);
    assert.equal(anto.age, 37);
  });

  it("createPerson must throw no arguments are given", function () {
    assert.throws(() => createPerson(), Error, "Invalid arguments");
  });

  it("printPerson to something", function () {
    const array = [
      createPerson("Manuel", 30),
      createPerson("Nicolas", 38),
      createPerson("Gabriele", 25),
      createPerson("Mario"),
    ];
    const result = printPerson(array);
    const expectedResult =
      "Manuel is 30 years old\n" +
      "Nicolas is 38 years old\n" +
      "Gabriele is 25 years old\n" +
      "Mario is 37 years old\n";

    assert.equal(result, expectedResult);
  });

  it("printPerson do something with formatter", () => {
    const array = [
      createPerson("Manuel", 30),
      createPerson("Nicolas", 38),
      createPerson("Gabriele", 25),
      createPerson("Mario"),
    ];

    // 1. arrow function assigned to const
    const formatter = (name, age) => name + " ha " + age + " anni";
    const badFormatter = (name, age) => "ciao " + name;

    // 2. traditional (anonymus) function
    const traditionalFormatter = function (name, age) {
      return name + " ha " + age + " anni";
    };
    let result = printPerson(array, traditionalFormatter);

    console.log(badFormatter("Antonio", 40));

    // 3. clousure/callback func...
    result = printPerson(array, (name, age) => name + " ha " + age + " anni");

    const expectedResult =
      "Manuel ha 30 anni\n" +
      "Nicolas ha 38 anni\n" +
      "Gabriele ha 25 anni\n" +
      "Mario ha 37 anni\n";

    assert.equal(result, expectedResult);
  });
});

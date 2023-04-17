////// MODO PER INSTANZIARE /////////
export default function populatePersonsList(persons) {
  function toListItem({ name, city, age }) {
    return `<li class="list-group-item d-flex">
                 <div>${name} ${city.length > 0 ? `(${city})` : ""}</div>
                  <div class="ms-auto"> ${age} anni</div>
                </li>`;
  }

  if (persons instanceof Array) {
    const ul = document.getElementById("persons-list");
    ul.innerHTML = persons
      .filter((p) => p instanceof Person)
      .sort((a, b) => a.age - b.age)
      .map(toListItem)
      .join("");
  }
}

///// -------PRIMO METODO---------/////
// const getListenItem = (p) => {
//   let s = "";
//   s += '<li class="list-group-item d-flex">';
//   s += "<div>" + p.name;
//   s += p.city.length > 0 ? " (" + p.city + ")" : "";
//   s += "</div>"
//   s += '<div class="ms-auto">' + p.age + " anni</div> ";
//   s += "</li>";

//   return s;
// };

//////ALTRO MODO PER INSTANZIARE DENTRO .map  /////////

// function populatePersonsList(persons) {
//   if (persons instanceof Array) {
//     const ul = document.getElementById("persons-list");
//     ul.innerHTML = persons
//       .filter((p) => p instanceof Person)
//       .sort((a, b) => a.age - b.age) //mette in ordine crescente o descrescente (dipende dall'inversione tra 'a' e 'b')
//       .map((p) => `<li class="list-group-item d-flex">
//                  <div>${p.name} ${p.city.length > 0 ? `(${p.city})` : ""}
//                  </div>
//                  <div class="ms-auto"> ${p.age} anni
//                  </div>
//                </li>`)
//       .join("");
//   }
// }

/* //////SECONDO MODO PER INSTANZIARE (TRAMITE .forEach ) /////////

      function populatePersonsList(persons) {
        const ul = document.getElementById("persons-list");

        if (persons instanceof Array) {
          //ul.innerHTML= "";
          persons
            .filter((p) => p instanceof Person)
            .sort((a, b) => a.age - b.age)
            .forEach((p) => {
              const li = document.createElement("li");
              li.setAttribute("class", "list-group-item d-flex");
              const firstDiv = document.createElement("div");
              firstDiv.innerHTML = p.name;
              const secondDiv = document.createElement("div");
              secondDiv.innerHTML = p.age + " " + "anni";
              secondDiv.setAttribute("class", "ms-auto");
              li.append(firstDiv);
              li.append(secondDiv);

              ul.append(li);
            })
            .join("");
        }
      }*/

export function populateOptions(persons) {
  if (persons instanceof Array) {
    const form = document.forms.item(1);
    const select = form.elements[0];
    const newOptions = persons
      .filter((p) => p instanceof Person)
      .sort((a, b) => a.age - b.age)
      .map((p, index) => new Option(p.name, index.toString()));
    const firstChild = [select.children[0]];
    const t = firstChild.concat(newOptions);
    select.innerHTML = "";
    t.forEach((i) => {
      select.append(i);
    });
  }
}

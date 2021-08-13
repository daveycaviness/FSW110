let header1 = document.createElement("h1");
header1.textContent = "Welcome to my Js Site";
document.body.appendChild(header1);

let pg = document.createElement("p");
pg.textContent = "All of this was created using Javascripting";
document.body.appendChild(pg);

let orderedList = document.createElement("ol")
document.body.appendChild(orderedList);

let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")

li1.textContent = "Classic";
li2.textContent = "Muscle";
li3.textContent = "European";

orderedList.appendChild(li1);
orderedList.appendChild(li2);
orderedList.appendChild(li3);

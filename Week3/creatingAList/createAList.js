

for (i = 0; i < 10; i++){
    var header1 = document.createElement("h1");
    header1.textContent = "Hello World!";
    document.body.appendChild(header1).style.color = "purple";
}
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var unorderedList = document.createElement("ol");
for (i = 0; i < names.length; i++){
document.body.appendChild(unorderedList).innerHTML += '<li>' + names[i]
}

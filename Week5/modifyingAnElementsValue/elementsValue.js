var form = document.getElementById("Value");
var name1 = form.elements[("firstName")];
var age = form.elements[("age")];
var gender = form.elements[("gender")];

form.addEventListener("submit", function(){
    alert("Name: " + name1.value + "  Age: " + age.value + " Gender: " + gender.value);
});
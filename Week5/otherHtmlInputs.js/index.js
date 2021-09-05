let form = document.getElementById("inputform");
let firstName = form.elements["firstName"];
let lastName = form.elements["lastName"];
let age = form.elements["age"];
let review = form.elements["review"];
let gender = form.elements["gender"];
let enterButton= form.elements["button"];
let recommend1 = form.elements["recommend1"];
let recommend2 = form.elements["recommend2"];
let recommend3 = form.elements["recommend3"];

recommend1.addEventListener("click", function(){
    if (recommend1.value == ""){
        recommend1.setAttribute("value", "Futuristics Gumby");
    }
    else if(recommend1.value== "Futuristics Gumby"){
        recommend1.setAttribute("value", "");
    }
});
recommend2.addEventListener("click", function(){
    if (recommend2.value == ""){
        recommend2.setAttribute("value", "Static Attack Lost Crusade");
    }
    else if(recommend2.value== "Static Attack Lost Crusade"){
        recommend2.setAttribute("value", "");
    }
});
recommend3.addEventListener("click", function(){
    if (recommend3.value == ""){
        recommend3.setAttribute("value", "Land of the Dinosuars");
    }
    else if(recommend3.value== "Land of the Dinosuars"){
        recommend3.setAttribute("value", "");
    }
});

form.addEventListener("submit", function(){
    alert("First-Name: " + firstName.value + " | Last-Name: " + lastName.value + " | Age: " + age.value + " | Was this Movie good?" + review.value + " | What movies have you recommended to your friends and family?" + recommend1.value + recommend2.value + recommend3.value + " | What is your gender?" + gender.value);
});
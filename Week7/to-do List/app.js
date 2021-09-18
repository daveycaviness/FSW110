var form= document.getElementById("myForm");
var input1= form.elements["title"];
var input2= form.elements["discription"];
var myList= document.getElementById("myList");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var listItem= document.createElement("li");
    var listTitle= document.createElement("h3");
    var listDiscription= document.createElement("h3");
    var clearButton= document.createElement("button"); 
    listTitle.textContent= input1.value;
    listDiscription.textContent= input2.value;
    clearButton.textContent= "clear";
    myList.appendChild(listItem);
    listItem.appendChild(listTitle);
    listItem.appendChild(listDiscription);
    listItem.appendChild(clearButton);

    // refresh input boxes upon submission
    input1.value= "";
    input2.value= "";

    // remove list item after button click
    clearButton.addEventListener("click", function(){
        clearButton.parentNode.remove();    
    });

});


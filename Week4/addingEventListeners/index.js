document.getElementById("id1").addEventListener("mousedown", function(){
    document.getElementById("id1").style.backgroundColor= "yellow"
})

document.getElementById("id1").addEventListener("mouseup", function(){
    document.getElementById("id1").style.backgroundColor= "blue"
})

document.addEventListener("wheel", function(){
    document.getElementById("id1").style.backgroundColor= "purple"
})

document.getElementById("id1").addEventListener("dblclick", function(){
    document.getElementById("id1").style.backgroundColor= "red"
})

document.getElementById("id1").addEventListener("mouseover", function(){
    document.getElementById("id1").style.backgroundColor= "green"
})

document.addEventListener('DOMContentLoader',()=>{
    document.getElementById("id1").style.backgroundColor= "black"
});

document.addEventListener("keydown", function (event){
    if (event.key=== "r"){
        document.getElementById("id1").style.backgroundColor= "red";
    }else if (event.key=== "g"){
        document.getElementById("id1").style.backgroundColor= "green";
    }else if (event.key=== "b"){
        document.getElementById("id1").style.backgroundColor= "blue";
    }else if (event.key=== "y"){
        document.getElementById("id1").style.backgroundColor= "yellow";
    }else if (event.key==="p"){
        document.getElementById("id1").style.backgroundColor= "purple";
    }else{
        document.body.style.backgroundColor= "orange";
    }
})
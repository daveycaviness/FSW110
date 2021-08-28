function calculate(firstNum, secondNum){
    return firstNum + secondNum;
}

function calculate2(firstNum, secondNum){
    return firstNum - secondNum;
}

function calculate3(firstNum, secondNum){
    return firstNum * secondNum;
}

document.getElementById("btnAdd").addEventListener("click", function(){
    document.getElementById("Answer").textContent = calculate(Number(document.getElementById("firstNum").value),Number(document.getElementById("secondNum").value));
});

document.getElementById("btnSub").addEventListener("click", function(){
    document.getElementById("Answer").textContent = calculate2(Number(document.getElementById("firstNum2").value),Number(document.getElementById("secondNum2").value));
});

document.getElementById("btnMult").addEventListener("click", function(){
    document.getElementById("Answer").textContent = calculate3(Number(document.getElementById("firstNum3").value),Number(document.getElementById("secondNum3").value));
});




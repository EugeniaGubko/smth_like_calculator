let num1 = 8
let num2 = 2
let sume = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let g = document.getElementById("sum-el")

function summa() {
    sume = num1 + num2
    g.textContent = sume
}

function subtract() {
    sume = num1 - num2
    g.textContent = sume
}

function divi() {
    sume = num1 / num2
    g.textContent = sume
}

function multi() {
    sume = num1*num2
    g.textContent = sume
}




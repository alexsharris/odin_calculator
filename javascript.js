// Event Delegation for keys

let input = document.getElementById("input");
let keyboard = document.querySelector(".keyboard");

keyboard.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (!btn) return;
    let inputLength = input.textContent.length;

    switch(btn.id) {
        case "one":
            if (input.textContent === "0") {
                input.textContent = "1";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "1";
            }
            break;
    }
    switch(btn.id) {
        case "two":
            if (input.textContent === "0") {
                input.textContent = "2";         
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "2";
            }
            break;
    }
    switch(btn.id) {
        case "three":
            if (input.textContent === "0") {
                input.textContent = "3";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "3";
            }
            break;
    }
    switch(btn.id) {
        case "four":
            if (input.textContent === "0") {
                input.textContent = "4";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "4";
            }
            break;
    }
    switch(btn.id) {
        case "five":
            if (input.textContent === "0") {
                input.textContent = "5";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "5";
            }
            break;
    }
    switch(btn.id) {
        case "six":
            if (input.textContent === "0") {
                input.textContent = "6";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "6";
            }
            break;
    }
    switch(btn.id) {
        case "seven":
            if (input.textContent === "0") {
                input.textContent = "7";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "7";
            }
            break;
    }
    switch(btn.id) {
        case "eight":
            if (input.textContent === "0") {
                input.textContent = "8";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "8";
            }
            break;
    }
    switch(btn.id) {
        case "nine":
            if (input.textContent === "0") {
                input.textContent = "9";
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "9";
            }
            break;
    }
    switch(btn.id) {
        case "zero":
            if (input.textContent === "0") {
                break;
            }
            else if (inputLength >= 10) {
                break;
            }
            else {
                input.textContent += "0";
            }
            break;
    }
    switch(btn.id) {
        case "clear":
            input.textContent = "0";
            break;
    }
    switch(btn.id) {
        case "delete":
            if (inputLength === 1) {
                input.textContent = "0";
            }
            else {
                input.textContent = input.textContent.slice(0, -1);
            }
            break;
    }
    switch(btn.id) {
        case "decimal":
            if (input.textContent === "0") {
                input.textContent += "."
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('.')) {
                break;
            }
            else {
                input.textContent += ".";
            }
            break;
    }
    switch(btn.id) {
        case "add":
            if (input.textContent === "0") {
                input.textContent += "+";
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('-')
                || input.textContent.includes('+')
                || input.textContent.includes('×') 
                || input.textContent.includes('÷') 
                || input.textContent.includes('%')) {
                break;
            }
            else {
                input.textContent += "+";
            }
            break;
    }
    switch(btn.id) {
        case "minus":
            if (input.textContent === "0") {
                input.textContent += "-";
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('-')
                || input.textContent.includes('+')
                || input.textContent.includes('×') 
                || input.textContent.includes('÷') 
                || input.textContent.includes('%')) {
                break;
            }
            else {
                input.textContent += "-";
            }
            break;
    }
    switch(btn.id) {
        case "multiply":
            if (input.textContent === "0") {
                input.textContent+= '×';
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('-')
                || input.textContent.includes('+')
                || input.textContent.includes('×') 
                || input.textContent.includes('÷') 
                || input.textContent.includes('%')) {
                break;
            }
            else {
                input.textContent += '×';
            }
            break;
    }
    switch(btn.id) {
        case "divide":
            if (input.textContent === "0") {
                input.textContent += "÷";
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('-')
                || input.textContent.includes('+')
                || input.textContent.includes('×') 
                || input.textContent.includes('÷') 
                || input.textContent.includes('%')) {
                break;
            }
            else {
                input.innerHTML += '÷';
            }
            break;
    }
    switch(btn.id) {
        case "modulo":
            if (input.textContent === "0") {
                input.textContent += "%";
            }
            else if (inputLength >= 10) {
                break;
            }
            else if (input.textContent.includes('-')
                || input.textContent.includes('+')
                || input.textContent.includes('×') 
                || input.textContent.includes('÷') 
                || input.textContent.includes('%')) {
                break;
            }
            else {
                input.textContent += "%";
            }
            break;
    }
    switch(btn.id) {
        case "changeSign":
            if (input.textContent === "0") {
                break;
            }
            else if (input.textContent[0] === "-") {
                input.textContent = input.textContent.slice(1);
            }
            else {
                input.textContent = "-" + input.textContent ;
            }
            break;
    }
})


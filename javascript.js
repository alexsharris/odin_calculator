// Global variables
const displayLimit = 11;

// Operate Function

let operate = function() {
    let input = document.getElementById("input");
    // Check for 
    operands = input.split()
}

// count instances of "."
let countInstances = function(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            else if (inputLength >= displayLimit) {
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
            // Check if over limit
            else if (inputLength >= displayLimit) {
                break;
            }
            // If last character is number AND there is an operator after first decimal
            else if (Number.isInteger(Number(input.textContent.slice(-1)))) {

                console.log(Number(input.textContent.slice(-1)));
                console.log(Number.isInteger(Number(input.textContent.slice(-1))));
                console.log(countInstances(input.textContent, "."));
                console.log(input.textContent);

                if (!input.textContent.includes('.')) {
                    input.textContent += ".";
                }
                else if (input.textContent.slice(1).includes('+') && countInstances(input.textContent, ".") === 1) {
                    console.log(input.textContent.slice(1))
                    input.textContent += ".";
                }
                else if (input.textContent.slice(1).includes('-')) {
                    input.textContent += ".";
                }
                else if (input.textContent.slice(1).includes('%')) {
                    input.textContent += ".";
                }
                else if (input.textContent.slice(1).includes('×')) {
                    input.textContent += ".";
                }
                else if (input.textContent.slice(1).includes('÷')) {
                    input.textContent += ".";
                }
            }
            else {
                break;
            }
            
            break;
    }
    switch(btn.id) {
        case "add":
            if (input.textContent === "0") {
                input.textContent += "+";
            }
            //Check if last character is not a number
            else if (input.textContent.slice(-1) === ".") {
                break;
            }
            else if (inputLength >= displayLimit) {
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
            //Check if last character is not a number
            else if (input.textContent.slice(-1) === ".") {
                break;
            }
            else if (inputLength >= displayLimit) {
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
            //Check if last character is not a number
            else if (input.textContent.slice(-1) === ".") {
                break;
            }
            else if (inputLength >= displayLimit) {
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
            //Check if last character is not a number
            else if (input.textContent.slice(-1) === ".") {
                break;
            }
            else if (inputLength >= displayLimit) {
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
            //Check if last character is not a number
            else if (input.textContent.slice(-1) === ".") {
                break;
            }
            else if (inputLength >= displayLimit) {
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
            // Add sign to first operand if no other operands exist
            else if (input.textContent[0] !== "-"
                && !input.textContent.includes('-')
                && !input.textContent.includes('+')
                && !input.textContent.includes('×')
                && !input.textContent.includes('÷')
                && !input.textContent.includes('%'))  {
                input.textContent = "-" + input.textContent;
            }
            // Remove sign from first operand if no other operands exist
            else if (input.textContent[0] === "-"
                && !input.textContent.includes('+')
                && !input.textContent.includes('×')
                && !input.textContent.includes('÷')
                && !input.textContent.includes('%'))  {
                input.textContent = input.textContent.slice(1);
            }
            // Change most recently inputted operand
            break;
    }
})


// Event Delegation for keys

let input = document.getElementById("input");
let keyboard = document.querySelector(".keyboard");

keyboard.addEventListener('click', (event) => {
    let target = event.target;
    let inputLength = input.textContent.length;
    console.log(inputLength);

    switch(target.id) {
        case "one":
            if (input.textContent === "0") {
                input.textContent = "1";
                inputLength = 1;
            }
            else if (inputLength >= 10) {
            }
            else {
                input.textContent += "1";
            }
            break;
    }
    switch(target.id) {
        case "two":
            if (input.textContent === "0") {
                input.textContent = "2";
            }
            else if (inputLength >= 10) {
            }
            else {
                input.textContent += "2";
            }
            break;
    }
    switch(target.id) {
        case "three":
            if (input.textContent === "0") {
                input.textContent = "3";
            }
            else {
                input.textContent += "3";
            }
            break;
    }
    switch(target.id) {
        case "four":
            if (input.textContent === "0") {
                input.textContent = "4";
            }
            else {
                input.textContent += "4";
            }
            break;
    }
    switch(target.id) {
        case "five":
            if (input.textContent === "0") {
                input.textContent = "5";
            }
            else {
                input.textContent += "5";
            }
            break;
    }
    switch(target.id) {
        case "six":
            if (input.textContent === "0") {
                input.textContent = "6";
            }
            else {
                input.textContent += "6";
            }
            break;
    }
    switch(target.id) {
        case "seven":
            if (input.textContent === "0") {
                input.textContent = "7";
            }
            else {
                input.textContent += "7";
            }
            break;
    }
    switch(target.id) {
        case "eight":
            if (input.textContent === "0") {
                input.textContent = "8";
            }
            else {
                input.textContent += "8";
            }
            break;
    }
    switch(target.id) {
        case "nine":
            if (input.textContent === "0") {
                input.textContent = "9";
            }
            else {
                input.textContent += "9";
            }
            break;
    }
    switch(target.id) {
        case "zero":
            if (input.textContent === "0") {
                input.textContent = "0";
            }
            else {
                input.textContent += "0";
            }
            break;
    }
    switch(target.id) {
        case "clear":
            input.textContent = "0";
            break;
    }
    switch(target.id) {
        case "delete":
            if (inputLength === 1) {
                console.log("Delete final number");
                input.textContent = "0";
            }
            else {
                console.log("Delete most recent");
                input.textContent = input.textContent.slice(0, -1);
            }
            break;
    }
})

//Clear to 0

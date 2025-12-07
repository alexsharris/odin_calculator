//Animate button on click

document.addEventListener("mousedown", (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.add('moved');
    }
})

document.addEventListener("mouseup", (event) => {
    document.querySelectorAll('button.moved').forEach(button => {
    button.classList.remove('moved');
    });
})

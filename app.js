const key = document.querySelector(".key");
const code = document.querySelector(".code");
const which = document.querySelector(".which");
const output = document.querySelector(".output");


document.addEventListener("keydown", (event) =>{ 
    key.textContent = `${event.key}`;
    code.textContent = `${event.code}`;
    which.textContent = `${event.which}`;
    output.textContent = `${event.which}`; 
})
 
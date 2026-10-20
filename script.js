const button = document.getElementById("toggle"); //toggle needed an e
const body = document.querySelector("body"); //body needed a y

button.addEventListener("click", toggleTheme); 

function toggleTheme() {  //there were no () after the function
    body.classList.toggle("dark");
}

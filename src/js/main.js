console.log(`Hello World from app.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

const emailInput = document.querySelector("#email_input")

emailInput.addEventListener("keyup", function(){
    event.preventDefault();
    const emailInputValue = emailInput.value
    const symbolCheck = emailInputValue.includes("@")
    const endCheck = emailInputValue.includes(".com")
    if (emailInputValue == ""){
        emailInput.removeAttribute("style")
    } else if (symbolCheck && endCheck){
        emailInput.style.backgroundColor = "#00e600";
        emailInput.style.borderBottomColor = "#00e600";
    } else {
        emailInput.style.backgroundColor = "#ff0000";
        emailInput.style.borderBottomColor = "#ff0000";
    }
})
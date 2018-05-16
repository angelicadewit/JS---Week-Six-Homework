"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

var emailInput = document.querySelector("#email_input");

emailInput.addEventListener("keyup", function () {
    event.preventDefault();
    var emailInputValue = emailInput.value;
    var symbolCheck = emailInputValue.includes("@");
    var endCheck = emailInputValue.includes(".com");
    if (emailInputValue == "") {
        emailInput.removeAttribute("style");
    } else if (symbolCheck && endCheck) {
        emailInput.style.backgroundColor = "#00e600";
        emailInput.style.borderBottomColor = "#00e600";
    } else {
        emailInput.style.backgroundColor = "#ff0000";
        emailInput.style.borderBottomColor = "#ff0000";
    }
});
//# sourceMappingURL=main.js.map

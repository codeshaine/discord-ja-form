
//? chatgpt codes

document.addEventListener("DOMContentLoaded", function () {
    const fnameInput = document.getElementById("fname");
    const fnameValidMessage = document.getElementById("fname-valid");

    fnameInput.addEventListener("input", function () {
        const enteredText = fnameInput.value.trim(); // Trim whitespace

        // Check if the input is empty
        if (enteredText === "") {
            fnameValidMessage.textContent = "First Name";
            fnameValidMessage.style.color = "#747987";
        } else {
            // Check for alphabetic characters
            if (/[^a-zA-Z]/.test(enteredText)) {
                fnameValidMessage.textContent = "Please enter valid name";
                fnameValidMessage.style.color = "red";
            } else {
                fnameValidMessage.textContent = "First Name";
                fnameValidMessage.style.color = "#747987";
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const snameInput = document.getElementById("sname");
    const snameValidMessage = document.getElementById("sname-valid");

    snameInput.addEventListener("input", function () {
        const enteredText = snameInput.value.trim(); // Trim whitespace

        // Check if the input is empty
        if (enteredText === "") {
            snameValidMessage.textContent = "Second Name";
            snameValidMessage.style.color = "#747987";
        } else {
            // Check for alphabetic characters
            if (/[^a-zA-Z]/.test(enteredText)) {
                snameValidMessage.textContent = "Please enter a valid name";
                snameValidMessage.style.color = "red";
            } else {
                snameValidMessage.textContent = "Second Name";
                snameValidMessage.style.color = "#747987";
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const unameInput = document.getElementById("uname");
    const unameValidMessage = document.getElementById("uname-valid");

    unameInput.addEventListener("input", function () {
        const enteredText = unameInput.value;

        // Check if the entered text contains the "#" symbol
        if (enteredText.includes("#")) {
            unameValidMessage.textContent = "Your discord user name (ex) user#112";
            unameValidMessage.style.color = "#747987";
        } else if (enteredText === "") {
            unameValidMessage.textContent = "Your discord user name (ex) user#112";
            unameValidMessage.style.color = "#747987";
        } else {
            unameValidMessage.textContent = "Enter valid user name should contain '#'";
            unameValidMessage.style.color = "red";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const exprInput = document.getElementById("expr");
    const exprValidMessage = document.getElementById("expr-valid");

    exprInput.addEventListener("input", function () {
        const enteredValue = exprInput.value.trim(); // Trim whitespace

        if (enteredValue === "") {
            exprValidMessage.textContent = ""; // Clear the validation message
        } else if (/^[0-9]+$/.test(enteredValue) === false) {
            exprValidMessage.textContent = "Please enter a valid number.";
            exprValidMessage.style.color = "red";
        } else {
            exprValidMessage.textContent = "";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("mail");
    const emailValidMessage = document.getElementById("mail-valid");

    emailInput.addEventListener("input", function () {
        const enteredEmail = emailInput.value.trim(); // Trim whitespace

        // Check if the input is empty
        if (enteredEmail === "") {
            emailValidMessage.textContent = "example@example.com";
            emailValidMessage.style.color = "#747987";
        } else {
            // Check for valid email pattern using a regular expression
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(enteredEmail)) {
                emailValidMessage.textContent = "Please enter a valid email address";
                emailValidMessage.style.color = "red";
            } else {
                emailValidMessage.textContent = "example@example.com";
                emailValidMessage.style.color = "#747987";
            }
        }
    });
});




// ! code by shaine to to check the options and textbox are empty before submitting
function sub(){
    
}
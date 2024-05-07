// Exercise 6
function validate() {
    var error = 0;
    // Get the input fields
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");
    var fEmail = document.getElementById("fEmail");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

    // Get the error elements
    var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");
    var errorPassword = document.getElementById("errorPassword");
    var errorEmail = document.getElementById("errorEmail");
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");
	
    // Validate fields entered by the user: name, phone, password, and email
    if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
        error++;
        fName.classList.add("is-invalid");
        errorName.innerText = "Invalid name. Must contain at least 3 letters.";
    } else {
        fName.classList.remove("is-invalid");
        errorName.innerText = "";
    }

    if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
        error++;
        fLastN.classList.add("is-invalid");
        errorLastN.innerText = "Invalid name. Must contain at least 3 letters.";
    } else {
        fLastN.classList.remove("is-invalid");
        errorLastN.innerText = "";
    }

    if (fPhone.value.length !== 9 || isNaN(fPhone.value)) {
        error++;
        fPhone.classList.add("is-invalid");
        errorPhone.innerText = "Invalid phone number.";
    } else {
        fPhone.classList.remove("is-invalid");
        errorPhone.innerText = "";
    }

    if (fPassword.value.length < 4 || !/\d/.test(fPassword.value) || !/[a-zA-Z]/.test(fPassword.value)) {
        error++;
        fPassword.classList.add("is-invalid");
        errorPassword.innerText = "Invalid password. Must be 4-8 characters and include both numbers and letters.";
    } else {
        fPassword.classList.remove("is-invalid");
        errorPassword.innerText = "";
    }

    if (fEmail.value.length < 3 || !fEmail.value.includes("@")) {
        error++;
        fEmail.classList.add("is-invalid");
        errorEmail.innerText = "Invalid email. Must contain '@'.";
    } else {
        fEmail.classList.remove("is-invalid");
        errorEmail.innerText = "";
    }

    if (fAddress.value.length < 3) {
        error++;
        fAddress.classList.add("is-invalid");
        errorAddress.innerText = "Invalid address.";
    } else {
        fAddress.classList.remove("is-invalid");
        errorAddress.innerText = "";
    }

    if (error > 0) {
        alert("Error: Please review fields in red color.");
    } else {
        alert("OK: Form sent, Thanks!");
		document.getElementById("checkoutForm").submit();
    }
}
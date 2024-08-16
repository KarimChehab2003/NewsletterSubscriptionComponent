const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("emailInput");
const invalidFeedbackP = document.getElementById("invalid-feedback");
const newspaperSubscriptionContainer = document.querySelector(".newspaperSubscription");
const thanksContainer = document.querySelector(".thanksContainer");
const dismissButton = document.getElementById("dismissButton");
const savedEmail = document.getElementById("emailEntered")

function writeInvalidFeedback(message) {
    emailInput.classList.add("bg-danger-subtle", "border", "border-danger");
    invalidFeedbackP.textContent = message;
}

function changeToDefaultColors() {
    if (emailInput.classList.contains("bg-danger-subtle")) {
        emailInput.classList.remove("bg-danger-subtle", "border", "border-danger");
    }
    invalidFeedbackP.innerHTML = "";
}

subscribeBtn.addEventListener('click', event => {
    event.preventDefault();
    let textInput = emailInput.value;

    if (textInput == "")
        writeInvalidFeedback("Field is required");
    else if (!(textInput.includes("@")))
        writeInvalidFeedback("Valid email required");
    else {
        changeToDefaultColors();
        newspaperSubscriptionContainer.classList.add("d-none");
        thanksContainer.classList.remove("d-none");
        savedEmail.innerHTML = textInput;
    }
})

dismissButton.addEventListener("click", () => {
    location.reload();
})
const userInput = document.querySelector("#user-input");
const runBtn = document.querySelector("#run-btn");

runBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = userInput.value;

    // Checking value
    const regex = /[a-zA-Z-]/g;
    if (regex.test(value) || value === "") {
        alert("Please enter a phone number without letters, spaces, simbols, etc");
        return;
    }

    // Concatenate the URL
    const url = `https://api.whatsapp.com/send?phone=${value}`;

    // Open the chat
    window.open(url);
});
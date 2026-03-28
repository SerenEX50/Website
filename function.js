document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("button[type='submit']");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple validation (can be replaced with actual authentication logic)
        if (username && password) {
            // Redirect to UI.html
            window.location.href = "../HTML Codes/UI.html";
        } else {
            alert("Please enter both username and password.");
        }
    });
});
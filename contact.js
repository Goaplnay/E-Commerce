// Simple form validation and status display
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Basic validation for empty fields
    if (name === "" || email === "" || subject === "" || message === "") {
        document.getElementById("form-status").innerText = "All fields are required.";
        return false;
    }

    // Validate email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("form-status").innerText = "Please enter a valid email address.";
        return false;
    }

    // Success message (could be replaced with AJAX to send form data)
    document.getElementById("form-status").innerText = "Your message has been sent successfully!";
    document.getElementById("form-status").style.color = "green";

    // Clear form fields (optional)
    document.getElementById("contact-form").reset();

    return false; // Prevent form submission for demonstration purposes
}

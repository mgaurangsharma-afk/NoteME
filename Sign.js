function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(name)) {
        alert("Name must contain only letters.");
        return false;
    }
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password === "") {
        alert("Please enter your password.");
        return false;
    }
    if (password.length<8) {
        alert("Password must have atleast 8 characters.");
        return false;
    }
    alert("Account created successfully!");

    window.location.href = "main.html";
    return false;
}
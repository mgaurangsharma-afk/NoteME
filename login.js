function submitlogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
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
    if(password.length<8){
        alert("Password must have atleast 8 characters.");
        return false;
    }
    alert("Login successful!");
    window.location.href = "main.html";
    return false;
}
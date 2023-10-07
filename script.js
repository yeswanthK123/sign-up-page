function validateForm() {
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/;
    
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    if (!passwordRegex.test(password)) {
      alert("Please enter a password that is at least 8 characters long and contains at least one uppercase letter, one special character, and one number.");
      return false;
    }
    
    alert("Successful!");    
    return true;
  }
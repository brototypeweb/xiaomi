
    function validateForm() {
      var email = document.getElementById("email-input").value;
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      
      if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
      
      return true;
    }

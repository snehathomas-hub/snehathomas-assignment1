
    function ValidateEmail() {
        var email = document.getElementById("txtEmail").value;
        var lblError = document.getElementById("lblError");     
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,3}|[0-9]{1,2})(\]?)$/;
        if (!expr.test(email)) {
            lblError.innerHTML = "Invalid email address.";
        }
        else{
            lblError.innerHTML="";
        }
    }

    function checkPassword(str) {
        var psw = document.getElementById("txtPassword").value;
        var lblError = document.getElementById("password_strength");     
        var expr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}/;
        if (!expr.test(psw)) {
            lblError.innerHTML = "Can be more strong";
        }
        else{
            lblError.innerHTML="";
        }
    }


    
   
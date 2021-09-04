var ev = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,3}|[0-9]{1,2})(\]?)$/;
var x = document.getElementById("check");
function validate(email){
    if(!ev.test(email))
        {
            x.innerHTML	= "Not a valid email";
            x.style.color = "red"
        }
    else
        {
            x.innerHTML	= "Looks good!";
            x.style.color = "green"
        }
    }

    function isGood(password) {
        var password_strength = document.getElementById("password-text");
  
        //TextBox left blank.
        if (password.length == 0) {
          password_strength.innerHTML = "";
          return;
        }
  
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
  
        var passed = 0;
  
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
          if (new RegExp(regex[i]).test(password) && password.length>7) {
            passed++;
          }
        }
  
        //Display status.
        var strength = "";
        switch (passed) {
          case 0:
          case 1:
          case 2:
            strength = "<small class='progress-bar bg-danger' style='width: 30%'>Weak</small>";
            break;
          case 3:
            strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
            break;
          case 4:
            strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
            break;
  
        }
        password_strength.innerHTML = strength;
  
      }

    
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    var phn=document.getElementById("mob").value;
    
    function phonenumber(mob)
    { 
      // mob.onblur{
      //   checkphn.innerHTML="";
      // }
   
  if((phoneno.test(mob)))
        {
          checkphn.innerHTML="";
      return true;
        }
      else
        {
        checkphn.innerHTML="Please enter a valid phone number.";
        return false;
        }
      }
var count = 2;

function validate ()
{

   var password = document.login.password.value;
   var valid = false;
   var passwordArray = ["1093"]
   for (var i = 0; i < usernameArray.length; i++)

if (password == passwordArray [i])
{
   valid = true;
   break;
}


if(valid)
{
   alert("Login was successful");
   window.location = "gp.html"
   return false ;
}
if (password>30 ||password< 8 ){
   alert("password must be between 8 and 30 characters")
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}

}
function validateForm()
{
    var z= document.getElementById("phone").value;
    var x = document.getElementById("naam").value;
    var y = document.getElementById("email1").value
	  var pattr = /^([a-zA-Z0-9_\.\-])+@([a-z]+\.)+([a-z]{2,3})+$/;
    var pattern=/^\d{10}$/;

  if (pattr.test(y)===true && z.match(pattern) && x!="" ){
    alert("Registration Successful")
    redirect_home()
  }

else if (x==""||y==""||z=="")
alert("Please Fill out All The Details")
}
function redirect_home(){
  window.location="homepage1.html"
}

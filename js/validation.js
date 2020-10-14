function validateEmail()  {
  var x=document.subscribe.email.value;
  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
  var error=document.getElementById('error');
  var empty=document.getElementById('empty');
  var success=document.getElementById('success');
  var input=document.getElementById('email');

  if (x == "" || x.length<1) {
    empty.style.display = "block";
    input.style.borderColor = "#ff5263";
    return false;
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    error.style.display = "block";
    input.style.borderColor = "#ff5263";
    return false;
  } else {
    empty.style.display = "none";
    error.style.display = "none";
    success.style.display = "block";
    input.style.borderColor = "#c2d3ff";
    return true;
  }

}

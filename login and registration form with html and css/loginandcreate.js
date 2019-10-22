var item=document.getElementById("reg");
item.addEventListener("click",function showcreate(){
    var item2 = document.getElementById("create_form");
    item2.style.display="inline";
    var item3 = document.getElementById("login_form");
    item3.style.display="none";
}
);
// end of loginn form ..................
var hold = document.getElementById("reg2");
hold.addEventListener("click", function showclogin() {
    var item = document.getElementById("create_form");
    item.style.display = "none";
    var item2= document.getElementById("login_form");
    item2.style.display = "inline";
})
// log in button action with dom in javascript
var logbtn=document.getElementById("login");

logbtn.addEventListener("click",function logi()
{
    var name = document.getElementById("username").value;
    var pass = document.getElementById("userpassword").value;
    alert("your username "+ name + " and password "+ pass +" has been recived");
    console.log(name+" "+pass);
});
// create account action button with dom in javascript..
var createbtn = document.getElementById("login2");

createbtn.addEventListener("click", function cret() {
    var name1 = document.getElementById("createname").value;
    var emailname1 = document.getElementById("createmail").value;
    var pass1 = document.getElementById("createpassword").value;
    alert("your account has succesfully been created");
    console.log(name1 + " " + pass1+" "+emailname1);
});
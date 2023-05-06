
req2=document.getElementById("req")
var reg3=/(?=.{6,})/
var reg1=/^(01)(0|1|2|5)[0-9]{8}$/
// var reg2=/^[a-z]{8}[0-9]{4}(.com)$/
var reg2=/.*@(yahoo|gmail|outlook).com$/i
var inputs=document.forms[0].elements;

sp1=document.getElementById("span1")
sp2=document.getElementById("span2")
var email=document.getElementById("input1")
var pass=document.getElementById("input2")

 email.addEventListener('input',function(e){
// console.log(e.target.value);

var current_value=e.target.value;
var mobilereg=reg1.test(current_value)
var emailreg=reg2.test(current_value)
console.log(mobilereg);
console.log(emailreg);
if (mobilereg||emailreg) {
    sp1.style.display='none';
}
else{
    sp1.style.display='block';
}}
)
pass.addEventListener('input',function(ele){
    var current_value2=ele.target.value;
    var passreg=reg3.test(current_value2)

    if (passreg) {
        sp2.style.display='none';
    }
    else{
        sp2.style.display='block';
    }
})
function validateForm(ev) {
    ev.preventDefault()

    if ((reg1.test(inputs[0].value)|| reg2.test(inputs[0].value))&& reg3.test(inputs[1].value)) {
        document.forms[0].submit()
    }

}
pass.onfocus = function() {myFunction()};

function myFunction() {
    if (inputs[0].value=="") {
        req2.innerText = "required";
        email.focus()
        email.style.boxShadow="0 0 15px 1px orange";
    }
    else if(inputs[0].value!=""){
        req2.innerText = "";
        email.style.boxShadow="0 0 0 0 ";
        pass.focus()
    }
}
//

let getemail=localStorage.getItem('email');
let getPass =localStorage.getItem('pass');
let loginBtn =document.getElementById('loginBtn');
let acountBtn =document.getElementById('acountBtn');
console.log(getPass)
console.log(getemail)
loginBtn.addEventListener('click',(e)=>{
   e.preventDefault();
 if(email.value===""||pass.value=== ""){
     alert(' Please Fill Data')
 }
 else{
if((getemail&&getemail.trim()==email.value)&&(getPass&&getPass.trim()==pass.value)){
   window.location='project.html'
   console.log('yes')
}
else{
alert('please ender valid email and password')
}
 }
 })

 /////dont have acount go to register
 acountBtn.addEventListener('click',()=>{
  window.location='register.html'
 })
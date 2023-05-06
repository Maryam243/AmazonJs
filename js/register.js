i = 0;
//name
let regex = /^[a-z]+\s[a-z]+$/i;
function checkName(name) {
  if (regex.test(name)) {
    document.getElementById("nameValidation").innerHTML = "Right name";
    document.getElementById("nameValidation").style.color = "green";
  } else {
    document.getElementById("nameValidation").innerHTML = " Enter your name";
    document.getElementById("nameValidation").style.color = "red";
  }
}
// Email
let regexEmail = /.*@(yahoo|gmail|outlook).com$/;
let regexMobile = /^(01)(0|1|2|5)[0-9]{8}$/;
function checkEmail(email) {
  if (regexEmail.test(email) || regexMobile.test(email)) {
    document.getElementById("emailValidation").innerHTML =
      " Real Email/ Mobile number";
    document.getElementById("emailValidation").style.color = "green";
    i++;
  } else {
    document.getElementById("emailValidation").innerHTML =
      "<p>Wrong or Invalid email address or mobile phone number.<br/> Please correct and try again.</p>";
    document.getElementById("emailValidation").style.color = "red";
  }
}
//password section
let check1 = /(?=.*[a-z])/;
let check2 = /(?=.*[A-Z])/;
let check3 = /(?=.*[0-9])/;
let check4 = /(?=.*[\~`!@#\$%\^&?><\.,'"\(\)\{\}:;/\\\+_\=\*])/;
let check5 = /(?=.{6,})/;
function check(data) {
  if (check1.test(data)) {
    document.getElementById("1").style.color = "green";
  } else {
    document.getElementById("1").style.color = "gray";
  }
  if (check2.test(data)) {
    document.getElementById("2").style.color = "green";
  } else {
    document.getElementById("2").style.color = "gray";
  }
  if (check3.test(data)) {
    document.getElementById("3").style.color = "green";
  } else {
    document.getElementById("3").style.color = "gray";
  }
  if (check4.test(data)) {
    document.getElementById("4").style.color = "green";
  } else {
    document.getElementById("4").style.color = "gray";
  }
  if (check5.test(data)) {
    document.getElementById("5").style.color = "green";
  } else {
    document.getElementById("5").style.color = "gray";
  }
}
// comfirm

function confirm1(passConfirm) {
  let pp = document.getElementById("password").value;
  console.log(pp);
  if (passConfirm === pp) {
    document.getElementById("confirm-m").innerHTML = "Right password";
    document.getElementById("confirm-m").style.color = "green";
    console.log(i);
  }
  if (passConfirm !== pp) {
    document.getElementById("confirm-m").innerHTML = "Password must match";
    document.getElementById("confirm-m").style.color = "red";
  }
}
// save data to API


// dataAPI = {
//   userName: data1,
//   mobileOrEmail: data2,
//   password: data3,
// };


//validation
function validateForm(ev) {
  ev.preventDefault();

  // if (
  //   regex.test(data1) &&
  //   // (regexEmail.test(data2) regexMobile.test(data2)) &&
  //   check5.test(data3) && data3 === data4  ) {
  //   // let xhr = new XMLHttpRequest();
    // let dataInfo = JSON.stringify(dataAPI);
    // let url;
    // xhr.open("POST", `url`);
    // xhr.send();
    

     document.forms[0].submit();
  
}



// add new user to database( localstorage )
  // register users

let register_btn= document.getElementById('btn');
// console.log(Uname)
// console.log(email)
// console.log(register_btn)
let Uname = document.getElementById("username")
console.log(Uname)
let email = document.getElementById("email")
console.log(email)
let pass = document.getElementById("password");
console.log(pass)
let data4 = document.getElementById("repassword")
register_btn.addEventListener('click',(e)=>{
  e.preventDefault();
if(Uname.value ===""||email.value==" " ||pass.value === " "){
 
    alert(' Please Fill Data')
}
else{
  localStorage.setItem('name',Uname.value);
  localStorage.setItem('email',email.value)
  localStorage.setItem('pass',pass.value)
setTimeout(()=>{
window.location='login.html'
},1000)
}


})
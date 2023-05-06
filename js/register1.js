  // register users
  let Uname = document.getElementById('name');
  let email = document.getElementById('email');
  let pass = document.getElementById('pass');
let register_btn= document.getElementById('register');
console.log(Uname)
console.log(email)
console.log(register_btn)

register_btn.addEventListener('click',(e)=>{
  e.preventDefault();
if(Uname.value===""||email.value==""||pass.value=== ""){
 
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

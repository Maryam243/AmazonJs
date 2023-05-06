let showElem = document.getElementById('count');

let loginEle=document.getElementById('login');

let userName = localStorage.getItem('name');
let logoutBtn=document.getElementById('logout');

console.log(showElem)
console.log(loginEle)
console.log(logoutBtn)
if(userName ){
    loginEle.remove();
    showElem.style.display="block";
    showElem.style.color='#fff'
    showElem.innerHTML=` <h3> Hello ${userName}</h3>  `
    logoutBtn.style.display='block'
}

//logout functionality

logoutBtn.addEventListener('click',()=>{
    localStorage.clear()
    setTimeout(()=>{
        window.location='register.html'
    },1000)
})

// number product add to cards 



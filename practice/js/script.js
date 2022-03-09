let loginBtn = document.querySelector('#login-btn');
let loginContainer = document.querySelector('.login-container');
let formClosed = document.querySelector('#form-closed');

loginBtn.addEventListener('click', () =>{
    loginContainer.classList.add('active');
});

formClosed.addEventListener('click', () =>{
    loginContainer.classList.remove('active');
})

let menuBtn = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
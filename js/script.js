"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__menu'),
        body = document.querySelector('body')

burger.addEventListener('click', () =>{
    burger.classList.toggle('burger_active');
    menu.classList.toggle('header__menu_active');
    body.classList.toggle('lock');
})
})
let btnRegister = document.querySelector('.btn_register');
let formRegister = document.querySelector('.col_1-1');
let boxLogin = document.querySelector('.col_2-1');


let btnLogin = document.querySelector('.btn_login');
let formLogin = document.querySelector('.col_1');
let boxRegister = document.querySelector('.col_2');

btnRegister.addEventListener('click', ()=> {
    formLogin.classList.add('col_1_change');
    boxRegister.classList.add('col_1_change');
    formRegister.classList.add('col_2_change');
    boxLogin.classList.add('col_2_change');
});

btnLogin.addEventListener('click', ()=> {
    formLogin.classList.remove('col_1_change');
    boxRegister.classList.remove('col_1_change');
    formRegister.classList.remove('col_2_change');
    boxLogin.classList.remove('col_2_change'); 
});
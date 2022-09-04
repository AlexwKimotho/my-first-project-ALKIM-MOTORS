let search = document.querySelector('.search-box');

document.querySelector('#search-icon'); onclick = () =>{
    search.classList.toggle('active');
    menu.classList.replace('active');
}

let menu = document.querySelector('.nav-bar');

document.querySelector('#menu-icon'); onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}


header 

let header = document.querySelector('header');

window.addEventListener('#scroll'), () => {
    header.classList.toggle('shadow', window.scrollY > 0 );

}


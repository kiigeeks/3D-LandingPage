const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const productBox = document.getElementById("productBox");
const imgBox = document.getElementById("imgBox");
const hamburger = document.querySelector('.hamburger input');
const navMenu = document.getElementById('nav-menu');
const navUl = document.querySelector('.navigation');
const ulLi = document.querySelector('.group a');
const darkLight = document.querySelector("#darkLight");
const darkLight2 = document.querySelector("#darkLight2");
const body = document.querySelector("body");

//darkmode
darkLight2.addEventListener("click", () => {
    if (body.classList == 'dark'){
        body.classList.remove('dark')
        darkLight.src = 'assets/moon.png'
        darkLight2.src = 'assets/moon.png'
    }else{
        body.classList.add('dark')
        darkLight.src = 'assets/sun.png'
        darkLight2.src = 'assets/sun.png'
    }
}) 

//darkmode
darkLight.addEventListener("click", () => {
    if (body.classList == 'dark'){
        body.classList.remove('dark')
        darkLight.src = 'assets/moon.png'
        darkLight2.src = 'assets/moon.png'
    }else{
        body.classList.add('dark')
        darkLight.src = 'assets/sun.png'
        darkLight2.src = 'assets/sun.png'
    }
}) 

//hamburger action
hamburger.addEventListener ('click', function () {
    navMenu.classList.toggle('nav-act')
    navUl.classList.toggle('ul-act')
});

//hamburger close
function cek() {
    hamburger.checked = false;
    navMenu.classList.toggle('nav-act')
    navUl.classList.toggle('ul-act')
}

//get single product
function getDetail(nomor) {
    newBox.style.display = "block"
    productBox.style.display = "flex"
    wrapper.style.display = "none"
    newBox.scrollIntoView({
        behavior: 'smooth'
    });
    imgBox.src = "assets/nike"+nomor+".png";

    document.getElementById("titleBox").innerHTML = document.getElementById('title'+nomor).innerText; 
    document.getElementById("descBox").innerHTML = document.getElementById('desc'+nomor).innerText; 
}

//set multi product 
function setNormal() {
    newBox.style.display = "none"
    productBox.style.display = "none"
    wrapper.style.display = "flex"
    wrapper.scrollIntoView({
        behavior: 'smooth'
    });
}

//navbar fixed
window.onscroll = function () {
    const header = document.getElementById("nav-head");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.style.position = "fixed"
        header.style.boxShadow = "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)"
        toTop.style.display = "flex"
    }else{
        header.style.position = "absolute"
        header.style.boxShadow = "none"
        toTop.style.display = "none"
    }

}
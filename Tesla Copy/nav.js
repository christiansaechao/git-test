var menuBtn = document.getElementById('menuBtn'); 
var aside = document.getElementById('aside'); 
var backDrop = document.getElementById('backdrop'); 
const closeMenu = document.querySelector("#close"); 

menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    aside.style.right = "0px"; 
    backDrop.style.display = "block"; 
});

closeMenu.addEventListener('click', (e) => {
    console.log('x button is being clicked'); 
    aside.style.right = "-320px"; 
    backDrop.style.display = "none"; 
})
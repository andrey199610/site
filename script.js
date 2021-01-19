const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');
const header= document.querySelector('.header-container')



hamburger.addEventListener( "click" , () => 
nav.classList.toggle('show'));

function myFunction(x) {
  x.classList.toggle("change");
 };
 


window.addEventListener('scroll', function() {
if(window.pageYOffset>400)
{header.style.paddingTop = '10px', 
header.style.background = 'linear-gradient(to right, #2f3dfc, #641187)'
 }
else
{header.style.paddingTop = '70px'; 
header.style.background = '' }
});
 
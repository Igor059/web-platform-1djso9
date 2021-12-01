const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slide = document.querySelectorAll('.block_img');
let slide1 = document.querySelectorAll('.t');
console.log(prev);
next.onclick = function () 
  { 
  for( let i = 0; i < slide.length - 1; i++) {
    if(slide[i].classList.contains('t') == false) {
        slide[i].classList.add('t');
        slide[++i].classList.remove('t');
  }
  }
  }


prev.onclick = function () 
  { 
  for( let i = 1; i < slide.length; i++) {
    if(slide[i].classList.contains('t') == false) {
        slide[i].classList.add('t');
        slide[--i].classList.remove('t');
  }
  }
  };

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
/*-----------------ibg-------------------*/

/*GUMBURGER-MENU */
const menuIcon = document.querySelector
(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const bodyLock = document.querySelector("body");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("change");
});
menuIcon.addEventListener("click", () => {
    bodyLock.classList.toggle("lock");
});
/*-----slider-------*/
// const prev = document.getElementById('btn-prev'),
//       next = document.getElementById('btn-next'),
//       slides = document.querySelectorAll('.slide'),
//       dots = document.querySelectorAll('.dot'),
//       slidesWrapper = document.querySelectorAll('.slider-wrapper'),
//       start=document.getElementById('start');

// let index = 0;


// const activeSlide = n => {
// for(slide of slides){
//     slide.classList.remove('active');
// }
// slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots){
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
//     }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
//     }
// const nextSlide  = () => {
//  if(index ==slides.length - 1){
//      index = 0;
//      prepareCurrentSlide(index);
//  } else {
//      index++;
//      prepareCurrentSlide(index);
//  }
// }
// const prevSlide  = () => {
//     if(index == 0){
//        index = slides.length - 1;
//        prepareCurrentSlide(index);
//     } else {
//         index--;
//         prepareCurrentSlide(index);
//     }
//    }

// dots.forEach((item,indexDot)=>{
//     item.addEventListener('click', () =>{
//         index = indexDot;
//         prepareCurrentSlide(index);
//     })
// })   

// const interval = setInterval(nextSlide, 2500);

// function stopSlid(){
//     clearInterval(interval);
// }
// function startSlid(){
//     return interval;
//  }


// start.addEventListener('click', startSlid );
// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);
// prev.addEventListener('click', prevSlide);

// clearInterval(interval)





/*-----slider end-------*/





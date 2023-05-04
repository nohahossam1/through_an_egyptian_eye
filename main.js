let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let TE = document.getElementById('TE');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px' ;
    moon.style.top = value * 3 + 'px' ;
    mountains3.style.top = value * 1.2 + 'px' ;
    mountains4.style.top = value * 1 + 'px' ;
    river.style.top = value  + 'px' ;
   boat.style.top = value  + 'px' ;
   boat.style.left = value * 2 + 'px' ;
   TE.style.fontsize = value * 2 + 'px';
   if(scrollY>=67){
    TE.style.fontsize = 67 + 'px';
    TE.style.position = "fixed"
    if(scrollY>487){
        TE.style.display = 'none';
    }else{
        TE.style.display = 'block';
    }
    if(scrollY >=170){
        document.querySelector('.main').style.background ='linear-gradient(#3fc5d7,#19a3d1)';
    }else{
        document.querySelector('.main').style.background ='linear-gradient(#7788d4,#09386d)';
    }
   }
}
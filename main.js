
let show =document.getElementById("scroll");
let progres =document.getElementById("progres");
let span =document.querySelectorAll(".progres span");
let number =document.querySelectorAll(".number");
let nums =document.getElementById("nums");
let strted =true;




window.onscroll=function(){
    if(this.scrollY>=200){
        show.classList.add("scroll");
    }else{
        show.classList.remove("scroll");
    }
    if(window.scrollY>=progres.offsetTop - 100) {
        span.forEach((span)=>{
            span.style.width=span.dataset.width;
        });
    }
    if(window.scrollY>=nums.offsetTop - 200){
        if(strted){
            number.forEach((num) => startcount(num));
        }
        strted=false;
    }
    
}
show.onclick=function(){
    window.scrollTo({
        top:0,
    });
}
function startcount(el){
let goal=el.dataset.goal;
let count=setInterval(() => {
    el.textContent++;
    if(el.textContent==goal){
        clearInterval(count);
    }
},200 /goal);

};


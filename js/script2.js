let choice = document.querySelectorAll(".filter .filter_box ul li a");
let hash1 = document.querySelectorAll (".filter .tag1 li a");
let hash2 = document.querySelectorAll (".filter .tag2 li a");
let i;

for (i=0; i< choice.length; i++)
 choice[i].addEventListener("click", function(){
     this.classList.toggle("on");
 });

 for (i=0; i< hash1.length; i++)
 hash1[i].addEventListener("click", function(){
     this.classList.toggle("on");
 });

 for (i=0; i< hash2.length; i++)
 hash2[i].addEventListener("click", function(){
     this.classList.toggle("on");
 });

 const reset = document.querySelector(".filter .reset_btn");

 reset.addEventListener("click", function(){
    for(i= 0; i<choice.length; i++)
    {choice[i].classList.remove("on");}
 });



 

// // 스크롤 750px 시점부터 등장하도록
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
   
   document.getElementById("quickmenu2").style.right ="90px"; 
   document.getElementById("quickmenu").style.right = "60px";
   document.querySelector("#quickmenu2 ul li:nth-child(1) a").style.background ="#2146db";
   document.querySelector("#quickmenu2 ul li:nth-child(2) a").style.background ="#7a90e9";
   document.querySelector("#quickmenu2 ul li:nth-child(3) a").style.background ="#7a90e9";
   document.querySelector("#quickmenu2 ul li:nth-child(4) a").style.background ="#7a90e9";
   document.querySelector("#quickmenu2 ul li:nth-child(1) div").style.right = "110px";
   document.querySelector("#quickmenu2 ul li:nth-child(2) div").style.right = "110px";
   document.querySelector("#quickmenu2 ul li:nth-child(3) div").style.right = "110px";
   document.querySelector("#quickmenu2 ul li:nth-child(4) div").style.right = "110px";
  }

   else{
       document.getElementById("quickmenu2").style.right ="-60px";
       document.getElementById("quickmenu").style.right = "-90px";
       document.querySelector("#quickmenu2 ul li:nth-child(1) div").style.right = "-110px";
       document.querySelector("#quickmenu2 ul li:nth-child(2) div").style.right = "-110px";
       document.querySelector("#quickmenu2 ul li:nth-child(3) div").style.right = "-110px";
       document.querySelector("#quickmenu2 ul li:nth-child(4) div").style.right = "-110px";
      
      }


  if(document.body.scrollTop >5000 || document.documentElement.scrollTop >5000) {

    document.getElementById("quickmenu2").style.right ="-90px";
    document.getElementById("quickmenu").style.right ="-90px";
    document.querySelector("#quickmenu2 ul li:nth-child(1) div").style.right = "-110px";
    document.querySelector("#quickmenu2 ul li:nth-child(2) div").style.right = "-110px";
    document.querySelector("#quickmenu2 ul li:nth-child(3) div").style.right = "-110px";
    document.querySelector("#quickmenu2 ul li:nth-child(4) div").style.right = "-110px";
   
  }     

  if(document.body.scrollTop >2000 || document.documentElement.scrollTop >2000) {

    document.querySelector("#quickmenu2 ul li:nth-child(2) a").style.background ="#2146db";
    document.querySelector("#quickmenu2 ul li:nth-child(1) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(3) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(4) a").style.background ="#7a90e9";
  }     
 
  if(document.body.scrollTop >3000 || document.documentElement.scrollTop >3000) {

    document.querySelector("#quickmenu2 ul li:nth-child(3) a").style.background ="#2146db";
    document.querySelector("#quickmenu2 ul li:nth-child(2) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(1) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(4) a").style.background ="#7a90e9";
  }     

  if(document.body.scrollTop >4000 || document.documentElement.scrollTop >4000) {

    document.querySelector("#quickmenu2 ul li:nth-child(4) a").style.background ="#2146db";
    document.querySelector("#quickmenu2 ul li:nth-child(1) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(2) a").style.background ="#7a90e9";
    document.querySelector("#quickmenu2 ul li:nth-child(3) a").style.background ="#7a90e9";
  }     
 

   }

  

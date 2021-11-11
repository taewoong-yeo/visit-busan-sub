// 메인 자바스크립트

const arrow = document.querySelector(".map>a i");
let introduce = document.querySelectorAll(".map .introduce_wrap>div");


for( let i=0; i<2; i++){
    arrow.addEventListener("click", e=>{
        activation (i, introduce);
        
    })
    
}

function activation (index, list){
    // index를 전달받게 하려고 씀

    for(let el of list){
        // list 목록 만큼 이라는 뜻
        el.classList.remove("introduce");
    }

    list[index].classList.add("introduce");
    // 자기 순번에 on을 추가하라는 명령

}

const haewoondae = document.querySelector(".map .haewoondae");
const haewoondaeMap =document.querySelector(".map .map-box img:nth-child(2)");

haewoondae.addEventListener("click", e=>{
    haewoondaeMap.classList.add("mapOn");
    for(let i = 0; i<icon.length; i++) {
    icon[i].classList.remove("introduce");
    hMapCon.classList.toggle("introduce");
    }
});

const kigang = document.querySelector(".map .kigang");
const kigangMap =document.querySelector(".map .map-box img:nth-child(1)");
const hMapCon = document.querySelector(".map .introduce_wrap #haewoondae");
const icon = document.querySelectorAll(".map .introduce_wrap>div")
const kMapCon = document.querySelector(".map .introduce_wrap #kigang")


kigang.addEventListener("click", e=>{
    haewoondaeMap.classList.remove("mapOn");
    kigangMap.classList.add("mapOn");
    for(let i = 0; i<icon.length; i++) {
    icon[i].classList.remove("introduce");
    kMapCon.classList.toggle("introduce");
    }

  
});



// // 스크롤 750px 시점부터 등장하도록
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
    document.getElementById("s-nav").style.top = "0";
  } else {
    document.getElementById("s-nav").style.top = "-60px";
  }
}
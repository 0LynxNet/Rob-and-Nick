gsap.from(".card",{
    scale:0,
    duration:0.6,
    delay:1,
    opacity:0,
    stagger:0.2,
    ScrollTrigger:{
        trigger:".card",
        scroller:"Body",
        stagger:0.2,
        start:"center"
    }
}
)
gsap.from(".textcard",{
  y:100,
  duration:0.6,
  delay:1,
  opacity:0,
  stagger:0.2,
  ScrollTrigger:{
      trigger:".textcard",
      scroller:"Body",
      stagger:0.2,
      start:"center"
  }
}
)
function openNav() {
  document.getElementById("mySidenav").style.width = "35%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

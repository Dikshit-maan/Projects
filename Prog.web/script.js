
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 5 + "px"
    crsr.style.top = dets.y + 5 + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})





gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration: 0.5,
    scrollTrigger:{
        Trigger:"#nav",
        scoller:"body",
        start:"top -10%",
        end:"top -11px",
        scrub:2
    }
})

gsap.to("#page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        Trigger:"#page2",
        scroller:"body",
        start:"top -45%",
        end:"top -100%",
        scrub:2

    }
})
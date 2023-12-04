
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.Style.left = dets.x + "px"
    crsr.Style.top = dets.y + "px"
    blur.Style.left = dets.x - 150 + "px"
    blur.Style.top = dets.y - 150 + "px"
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

gsap.to("#main",{
    backgroundColor:"#fff",
    scrollTrigger:{
        Trigger:"#main",
        scroller:"body",
        start:"top -45%",
        end:"top -100%",
        scrub:2

    }
})
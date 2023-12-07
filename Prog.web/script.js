
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})


// document.addEventListener("mousemove",function(dets){
    
//     crsr.Styl.left = dets.x + "px"
//     crsr.Styl.top = dets.y + "px"
// })



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
    backgroundColor:"#000",
    scrollTrigger:{
        Trigger:"#main",
        scroller:"body",
        start:"top -45%",
        end:"top -100%",
        scrub:2

    }
})
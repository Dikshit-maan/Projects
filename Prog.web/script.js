
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 10 + "px"
    crsr.style.top = dets.y + 10 + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #000"
        crsr.style.backgroundColor = "#fff"
    })
    

})

var cursor = document.querySelectorAll("#page2 .card")
cursor.forEach(function(back){
    back.addEventListener("mouseenter", function(){
        crsr.style.backgroundColor = "#000"
     })
    back.addEventListener("mouseleave", function(){
        crsr.style.backgroundColor = "#fff"
    })


})

var cur = document.querySelectorAll("#page3 ")
cur.forEach(function(bac){
    bac.addEventListener("mouseenter", function(){
        crsr.style.backgroundColor = "#000"
    })
    bac.addEventListener("mouseleave", function(){
        crsr.style.backgroundColor = "#fff"
    })
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

gsap.from("#about-us img,#about-us-in",{
    y:20,
    opacity:0,
    duration:1,
    scrollTrigger:{
        Trigger:"#aboutus",
        scroller:"body",
        
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        Trigger:".card",
        scroller:"body",
        
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})
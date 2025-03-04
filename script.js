var cursor = document.querySelector(".cursor");
var main =document.querySelector(".main");
var video = document.querySelector(".video")


main.addEventListener("mousemove",function(e){

    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.2,
        ease:"power1.out"
    })
})

video.addEventListener("mouseenter",function(){
    cursor.innerHTML="watch";
    gsap.to(cursor,{
        scale:4,
    })
})

video.addEventListener("mouseleave",function(){
    cursor.innerHTML=''
    gsap.to(cursor,{
        scale:1,
    })
})
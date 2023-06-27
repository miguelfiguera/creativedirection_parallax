gsap.registerPlugin(ScrollTrigger)

function init(){

 
gsap.to('#one', {scrollTrigger:{
    trigger:'#one',
    start:'top' ,
    scrub:true,
    toggleClass:'hidden',
    markers:true
}})
}



window.addEventListener('load',function(){
    init()
})
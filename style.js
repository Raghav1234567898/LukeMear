function circlee(){
    window.requestAnimationFrame(circlee)
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#circle").style.top = `${dets.clientY}px`
        document.querySelector("#circle").style.left = `${dets.clientX}px`
        
    })
}
window.requestAnimationFrame(circlee);
document.querySelectorAll("#hlo").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        document.querySelector("#circle").style.width = "80px"
        document.querySelector("#circle").style.height = "80px" 
        document.querySelector("#circle").style.backgroundColor = "white"
        document.querySelector("#circle").style.mixBlendMode = "difference"
    })
    elem.addEventListener("mouseleave",function(dets){
        document.querySelector("#circle").style.width = "20px"
        document.querySelector("#circle").style.height = "20px"
        document.querySelector("#circle").style.backgroundColor = "transparent"
        document.querySelector("#circle").style.mixBlendMode = "initial"
    })
})
document.querySelector(".cir").addEventListener("mousemove",function(dets){
    
    document.querySelector(".cir").style.transform = `translate(${dets.clientX*.2}px , ${dets.clientY*.1}px)`
})
document.querySelector(".cir").addEventListener("mouseleave",function(dets){
   document.querySelector(".cir").style.transform = `translate( 0px , 0px)`
})

$('.txt h1').textillate({ in: { effect: 'fadeInUp' , delay: 50} });

//document.querySelectorAll(".sect img").forEach(element => {
  //  element.addEventListener("mousemove",function(dets){
    //    document.querySelector("#wheel").style.top=`${dets.clientY}px`
      //  document.querySelector("#wheel").style.left=`${dets.clientX}px`
       // document.querySelector("#wheel").style.display="block"
       // document.querySelector("#circle").style.display="none"
       // document.querySelector("#wheel").style.backgroundColor = "black"
       // document.querySelector("#wheel").style.mixBlendMode = "difference"
       //  body.style.backgroundColor=dets.target.dataset.color
       // function abcd(){
        // window.requestAnimationFrame(abcd)
         //document.querySelector("#wheel").style.top=`${dets.clientY}px`
        // document.querySelector("#wheel").style.left=`${dets.clientX}px`
         

        //}
         //window.requestAnimationFrame(abcd)


    //})
    //element.addEventListener("mouseleave",function(){
        
      //  document.querySelector("#wheel").style.display="none"
        //document.querySelector("#circle").style.display="initial"
       


    //})
//});
document.querySelectorAll(".sect").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        document.querySelector("#wheel").style.top = `${dets.clientY}px`
        document.querySelector("#wheel").style.left = `${dets.clientX}px` 
        document.querySelector("#wheel").style.backgroundColor = "black"
        document.querySelector("#wheel").style.mixBlendMode = "difference"
        document.querySelector("#wheel").style.display = "block"
        document.querySelector("#circle").style.display = "none"
        document.querySelector("#main").style.backgroundColor = dets.target.dataset.color
    })
    elem.addEventListener("mouseleave",function(dets){
        document.querySelector("#circle").style.display = "initial"
        document.querySelector("#wheel").style.display = "none"
        document.querySelector("#main").style.backgroundColor = "#F8F8F8"
    })
    
    function wheel(dets){
        window.requestAnimationFrame(wheel)
        document.querySelector("#wheel").style.top = `${dets.clientY}px`
        document.querySelector("#wheel").style.left = `${dets.clientX}px`
    }
    window.requestAnimationFrame(wheel);
})
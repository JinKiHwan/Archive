gsap.to(".slowcity li span i", {
  x:0,
  y:'100%',
  
  //1초 후
  onComplete:function(){
    
    gsap.delayedCall(1, function(){
      document.querySelector('body').classList.remove('-nonescroll')
      window.location.href = "#member";
    })
  }
})
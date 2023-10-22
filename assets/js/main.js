// scroll screen animation js


let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress_value");
  
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    let scrollValue = Math.round((pos * 100) / calcHeight);
  
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
  
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  
    scrollProgress.style.background = `conic-gradient(
      from 0deg, #fd5407 ${scrollValue}%, #d7d7d7 ${scrollValue}%
    )`;
  };
  
  window.addEventListener("scroll", calcScrollValue);
  

  // gsap animation js
  gsap.from('.home-contant', {opacity: -1, duration: 0.8, delay:0.2, x:-100})

  gsap.from('#whatsapp', {opacity: -1, duration: 0.8, delay: 4, y: 100})
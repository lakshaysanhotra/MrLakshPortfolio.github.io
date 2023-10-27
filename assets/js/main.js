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
  gsap.from('.home-contant', {opacity: -1, duration: 1.5, delay:0.2, y:100})

  gsap.from('.about-img', {opacity: -1, duration: 1.5, delay:0.2, y:-100})

  gsap.from('#progress', {opacity: -1, duration: 1.1, delay:3, y: 100})
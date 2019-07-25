const loadingBar = document.querySelector('.progress');

window.addEventListener('load', loadFunc(moveIcons));

function loadFunc(callback){
  loadingBar.classList.remove('d-none');
  loadingBar.style.animation = "loadBar 1s forwards";
  
  setTimeout(()=>{
    document.querySelector('.program').classList.remove('d-none');
    document.querySelector('.program').style.animation = "programOpacity 1200ms forwards";
    loadingBar.classList.add('d-none');
    callback();
  }, 1000)
}

function moveIcons(){
  setTimeout(()=>{
    document.querySelector('.icons-container a:nth-child(1) i').style.transform = "translateX(110px) rotateZ(0deg)";
    document.querySelector('.icons-container a:nth-child(1) i').style.opacity = "1";
  }, 1200);
  setTimeout(()=>{
    document.querySelector('.icons-container a:nth-child(2) i').style.transform = "translateX(110px) rotateZ(0deg)";
    document.querySelector('.icons-container a:nth-child(2) i').style.opacity = "1";
  }, 1500);
}
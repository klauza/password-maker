const loadingBar = document.querySelector('.progress');

window.addEventListener('load', loadFunc);

function loadFunc(){
  loadingBar.classList.remove('d-none');
  loadingBar.style.animation = "loadBar 1s forwards";
  
  setTimeout(()=>{
    document.querySelector('.program').classList.remove('d-none');
    document.querySelector('.program').style.animation = "programOpacity 1200ms forwards";
    loadingBar.classList.add('d-none');
  }, 1000)
}
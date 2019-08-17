document.querySelector('#copyImg').addEventListener('click', copyRegex);




function copyRegex() {

  var copyText = document.getElementById("regexOutput");  // text field

  copyText.disabled=false;  // enable to select

  copyText.select();  // select the text field

  document.execCommand("copy"); // copy
  copyText.disabled=true; // disable to select


}
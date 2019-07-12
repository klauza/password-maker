// function to allow whitespaces // spacebar
// allow user to copy regex from disabled input
// Refactor needed
// ---------------

let min=0, max='';

// start variables
var startLow = 'a-z'; 
var startUpp = '';
var startLowUpp = '';
var startLowUppD = '';
var startSpecial = '';

// at least one uppercase
var minOneUppercase = '';
// at least on enumber
var minOneNumber = '';

// allow special chars
var allowSpecialChars = '';
// has to contain at least one special char
var minOneSpecialChar = '';


// default regex
regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`


document.getElementById('name').addEventListener('blur', checkIfEmpty);   
document.getElementById('check').addEventListener('click', validateName);
const starting = document.querySelectorAll('.startingChar input');  // select all inputs of starting char

// min max inputs
const nameInput = document.getElementById('name');
const submitForm = document.getElementById('check');

// min 1. A-Z checkbox
document.querySelector('#oneUppercase').addEventListener('click', oneUpperCase);
// min 1. 0-9 checkbox
document.querySelector('#oneNumber').addEventListener('click', oneNumber);



const regexOutput = document.querySelector('#regexOutput');



// FUNCTIONS
function checkIfEmpty(){
  if(this.value == ''){
    nameInput.classList.remove('is-invalid');
    nameInput.classList.remove('is-valid');
  }else{
    return
  }
}


function validateName(e){
  e.preventDefault();

  if(min !== NaN && max !== NaN){

    try{
      let re = new RegExp(regexCheck);  // changing string into regex
      console.log('testing regex: ',re);
      // evaluation
      if(!re.test(nameInput.value)){  // testing if it's invalid
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameInput.focus();

      } else {  //it's valid!
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
      }

    }catch(err){
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('is-valid');
      console.log('error occured');
    }
  } 
}

// Must be at least uppercase funcion
function oneUpperCase(){
  if(this.checked){
    minOneUppercase = '(?=.*[A-Z])';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  } else {
    minOneUppercase = '';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  }
}

function oneNumber(){
  if(this.checked){
    minOneNumber = '(?=.*[0-9])';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  } else {
    minOneNumber = '';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  }
}


document.querySelector('#minLetters').addEventListener("keyup", function(){

  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    console.log('min is not a number');
    min = NaN;
    regexCheck = null;

  } else{
    if(this.value !== ''){  // validated
      console.log('min is now: '+ parseInt(this.value, 10));
      min = this.value;
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      

    } else{ // validated as 0
      min = 0;
      console.log('max is now: '+'0');
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
    }
  }
  
});


document.querySelector('#maxLetters').addEventListener("keyup", function(){
 
  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    console.log('max is not a number');
    max = NaN;
    regexCheck = null;

  } else{
    if(this.value !== ''){  // validated
      console.log('max is now: '+ parseInt(this.value, 10));
      max = this.value;
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`

    } else{ // validated as infinite
      max = '';
      console.log('max is now: '+'infinite');
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`

    }
  }
});


/*  ==+==  */



const clearStart = () => {  // clear all function
  startLow='';
  startUpp='';
  startLowUpp='';
  startLowUppD='';
  startSpecial='';
}

const startChar = (e) => {
  let startId = e.target.id;  // get id 

  switch(startId){
    case 'startWithLowercase':
      clearStart();
      startLow = 'a-z';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      break;

    case 'startWithUppercase':
      clearStart();
      startUpp = 'A-Z';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      break;

    case 'startWithLowUpp':
      clearStart();
      startLowUpp = 'a-zA-Z';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      break;

    case 'startWithLowUppD':
      clearStart();
      startLowUppD = 'a-zA-Z0-9';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      break;

    case 'startWithSpecial':
      clearStart();
      startSpecial = '@\$=!\.:#%';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
      break;

    case 'startWithAnything':
      clearStart();
      regexOutput.value = `/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`; 
      regexCheck = `^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`;    // cannot be like this, interfere with min max string
      break;

    default:
      console.log('nothing selected');
  }

  //console.log(startId);
}


starting.forEach((input) => input.addEventListener('click', startChar));

/*

const checkForError = () => {
  const showError = document.querySelector('.showError');

  if(this.value !== null && document.querySelector('#minLetters').value !== null){
    (min >= max ? showError.style.display = "block" : showError.style.display = "none")
  } else return

}

*/


// display special char block

const showOneCharBlock = () => {   
  const charBlock = document.querySelector('.minOneBlock');
  charBlock.classList.remove('invisible');
  charBlock.classList.add('visible');

  // logic with regex - allow special chars
  allowSpecialChars = '@\$=!\.:#%';

  regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
  regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`

}

const hideOneCharBlock = () => {    // hide and desactivate special characters

  // along with hiding the 'atLeastOneSpecial' block, also remove checked attribute from it.
  if(document.querySelector('#specialCharMinTrue').checked){
    document.querySelector('#specialCharMinTrue').checked = false;
    atLeastOneSpecial();
  }

  const charBlock = document.querySelector('.minOneBlock');
  charBlock.classList.remove('visible');
  charBlock.classList.add('invisible');

  // logic with regex - do not allow special chars
  allowSpecialChars = '';
  regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
  regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  
}


document.querySelector('#specialCharYes').addEventListener('click', showOneCharBlock);
document.querySelector('#specialCharNo').addEventListener('click', hideOneCharBlock);



function atLeastOneSpecial(){
  if(this.checked){   // if check, add regex
    minOneSpecialChar = '(?=.*[@\$=!\.:#%])';

  regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
  regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  } else {    // if not checked, remove regex
    minOneSpecialChar = '';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
  }
}

document.querySelector('#specialCharMinTrue').addEventListener('click', atLeastOneSpecial);
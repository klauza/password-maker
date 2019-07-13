// future tasks :
// more css
// function to allow whitespaces // spacebar
// allow user to copy regex from disabled input
// ---------------



// VARIABLES
let min=0, max='';            // min & max

var minOneUppercase = '';     // at least one uppercase

var minOneNumber = '';        // at least one number

var allowSpecialChars = '';   // allow special chars

var minOneSpecialChar = '';   // has to contain at least one special char

// first char
var startLow = 'a-z', 
    startUpp = '',
    startLowUpp = '',
    startLowUppD = '',
    startSpecial = '';


// default regex
let regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`


// submit form
const submitInput = document.getElementById('name');
const submitForm = document.getElementById('check');
submitInput.addEventListener('blur', checkIfEmpty);   
submitForm.addEventListener('click', validateSubmit);

// min max inputs
document.querySelector('#minLetters').addEventListener("keyup", minLength);
document.querySelector('#maxLetters').addEventListener("keyup", maxLength);

// minimum one A-Z checkbox
document.querySelector('#oneUppercase').addEventListener('click', oneUpperCase);
// minimum one 0-9 checkbox
document.querySelector('#oneNumber').addEventListener('click', oneNumber);

// first character
const starting = document.querySelectorAll('.startingChar input');  // select all inputs of starting char
starting.forEach((input) => input.addEventListener('click', startChar));


const regexOutput = document.querySelector('#regexOutput');   // disabled input for displaying current regex

document.querySelector('#specialCharYes').addEventListener('click', showOneCharBlock);
document.querySelector('#specialCharNo').addEventListener('click', hideOneCharBlock);
document.querySelector('#specialCharMinTrue').addEventListener('click', atLeastOneSpecial);

// FUNCTIONS

/* IMPORTANT */
function setRegex(){
  regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$/`;
  regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}${minOneSpecialChar}[a-zA-Z0-9${allowSpecialChars}]{${min},${max}}$`
}


// see if the submitInput is empty
function checkIfEmpty(){
  if(this.value == ''){
    submitInput.classList.remove('is-invalid');
    submitInput.classList.remove('is-valid');
  }else{
    return
  }
}

// check if regex is valid
function validateSubmit(e){
  e.preventDefault();

  if(min !== NaN && max !== NaN){

    try{
      let re = new RegExp(regexCheck);  // changing string into regex
      console.log('testing regex: ',re);
      // evaluation
      if(!re.test(submitInput.value)){  // testing if it's invalid
        submitInput.classList.add('is-invalid');
        submitInput.classList.remove('is-valid');
        submitInput.focus();

      } else {  //it's valid!
        submitInput.classList.remove('is-invalid');
        submitInput.classList.add('is-valid');
      }

    }catch(err){
      submitInput.classList.add('is-invalid');
      submitInput.classList.remove('is-valid');
      console.log('error occured');
    }
  } 
}

// Must be at least one uppercase
function oneUpperCase(){
  if(this.checked){
    minOneUppercase = '(?=.*[A-Z])';
    setRegex();
  } else {
    minOneUppercase = '';
    setRegex();
  }
}

// Must be at least one number
function oneNumber(){
  if(this.checked){
    minOneNumber = '(?=.*[0-9])';
    setRegex();
  } else {
    minOneNumber = '';
    setRegex();
  }
}

// minimum quantity of chars
function minLength(){

  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    //console.log('min is not a number');
    min = NaN;
    regexCheck = null;

  } else{
    if(this.value !== ''){  // validated
      //console.log('min is now: '+ parseInt(this.value, 10));
      min = this.value;
      setRegex();
      
    } else{ // validated as 0
      min = 0;
      //console.log('min is now: '+'0');
      setRegex();
    }
  }
  
};

// maximum quantity of chars
function maxLength(){
 
  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    //console.log('max is not a number');
    max = NaN;
    regexCheck = null;

  } else{
    if(this.value !== ''){  // validated
      //console.log('max is now: '+ parseInt(this.value, 10));
      max = this.value;
      setRegex();

    } else{ // validated as infinite
      max = '';
      //console.log('max is now: '+'infinite');
      setRegex();

    }
  }
};


/*  ==+==  */


// supportive func for startChar function
const clearStart = () => {  
  startLow='';
  startUpp='';
  startLowUpp='';
  startLowUppD='';
  startSpecial='';
}

// first char selector
function startChar(e){
  let startId = e.target.id;  // get id 

  switch(startId){
    case 'startWithLowercase':
      clearStart();
      startLow = 'a-z';
      setRegex();
      break;

    case 'startWithUppercase':
      clearStart();
      startUpp = 'A-Z';
      setRegex();
      break;

    case 'startWithLowUpp':
      clearStart();
      startLowUpp = 'a-zA-Z';
      setRegex();
      break;

    case 'startWithLowUppD':
      clearStart();
      startLowUppD = 'a-zA-Z0-9';
      setRegex();
      break;

    case 'startWithSpecial':
      clearStart();
      startSpecial = '@\$=!\.:#%';
      setRegex();
      break;

    case 'startWithAnything':
      clearStart();
      regexOutput.value = `/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`; 
      regexCheck = `^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`;    // cannot be like this, interfere with min max string
      break;
  }
}


// display [minimum one Char] block
function showOneCharBlock(){   
  const charBlock = document.querySelector('.minOneBlock');
  charBlock.classList.remove('invisible');
  charBlock.classList.add('visible');

  // logic with regex - allow special chars
  allowSpecialChars = '@\$=!\.:#%';

  setRegex();

}

// hide [minimum one Char] block & substract
function hideOneCharBlock(){    // hide and desactivate special characters

  // remove checked attribute from hidden block
  if(document.querySelector('#specialCharMinTrue').checked){
    document.querySelector('#specialCharMinTrue').checked = false;
    atLeastOneSpecial();
  }

  const charBlock = document.querySelector('.minOneBlock');
  charBlock.classList.remove('visible');
  charBlock.classList.add('invisible');

  // logic with regex - do not allow special chars
  allowSpecialChars = '';
  setRegex();
  
}

// minimum one special chars
function atLeastOneSpecial(){
  if(document.querySelector('#specialCharMinTrue').checked){   // if "At least 1 special block" is checked, add regex
    minOneSpecialChar = '(?=.*[@\$=!\.:#%])';

    setRegex();
  } else {    // if not checked, remove regex
    minOneSpecialChar = '';
    setRegex();
  }
}
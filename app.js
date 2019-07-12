
// must start with a-z A-Z 0-9
// must contain at least one A-Z
// must contain at least one 0-9
// special chars allowed
// minimum 5 chars, max 15
// hide special char option if not even chosen to be in regex 

let min=0, max='';

// start variables
var startLow='a-z'; 
var startUpp='';
var startLowUpp='';
var startLowUppD='';
var startSpecial='';

// at least one uppercase
var minOneUppercase='';
// at least on enumber
var minOneNumber='';

// default regex

regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`

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
    console.log('adds A-Z');
    minOneUppercase = '(?=.*[A-Z])';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
  } else {
    console.log('removes A-Z');
    minOneUppercase = '';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
  }
}

function oneNumber(){
  if(this.checked){
    console.log('adds 0-9');
    minOneNumber = '(?=.*[0-9])';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
  } else {
    console.log('removes 0-9');
    minOneNumber = '';
    regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
    regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
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
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
      

    } else{ // validated as 0
      min = 0;
      console.log('max is now: '+'0');
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
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
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`

    } else{ // validated as infinite
      max = '';
      console.log('max is now: '+'infinite');
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`

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
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
      break;

    case 'startWithUppercase':
      clearStart();
      startUpp = 'A-Z';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
      break;

    case 'startWithLowUpp':
      clearStart();
      startLowUpp = 'a-zA-Z';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
      break;

    case 'startWithLowUppD':
      clearStart();
      startLowUppD = 'a-zA-Z0-9';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
      break;

    case 'startWithSpecial':
      clearStart();
      startSpecial = '@\$=!\.:#%';
      regexOutput.value = `/(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$/`;
      regexCheck = `(?=^[${startLow}${startUpp}${startLowUpp}${startLowUppD}${startSpecial}])${minOneUppercase}${minOneNumber}[a-zA-Z0-9@\$=!\.:#%]{${min},${max}}$`
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
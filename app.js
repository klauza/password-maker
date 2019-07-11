var regexCheck = /^[a-zA-Z]{2,10}$/;  // puts default
let min=0, max='';


document.getElementById('name').addEventListener('blur', checkIfEmpty);   
document.getElementById('check').addEventListener('click', validateName);


const nameInput = document.getElementById('name');
const submitForm = document.getElementById('check');

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

  try{
  let re = new RegExp(regexCheck);  // changing string into regex

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
    console.log('error occured');
  }
}


document.querySelector('#minLetters').addEventListener("keyup", function(){
  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    console.log('min is now: '+'fail');

  } else{
    if(this.value !== ''){  // validated
      console.log('min is now: '+ parseInt(this.value, 10));
      min = this.value;
      regexOutput.value = `/^[a-zA-Z]{${min},${max}}$/`;
      regexCheck = `^[a-zA-Z]{${min},${max}}$`;
      

    } else{ // validated as 0
      min = 0;
      console.log('max is now: '+'0');
      regexOutput.value = `/^[a-zA-Z]{0,${max}}$/`;
      regexCheck = `^[a-zA-Z]{0,${max}}$`;
    }
  }

});


document.querySelector('#maxLetters').addEventListener("keyup", function(){
  const re = /^[0-9]*$/;

  if( !re.test(this.value) ){ // fail
    regexOutput.value = 'fail';
    console.log('max is now: '+'fail');

  } else{
    if(this.value !== ''){  // validated
      console.log('max is now: '+ parseInt(this.value, 10));
      max = this.value;
      regexOutput.value = `/^[a-zA-Z]{${min},${max}}$/`;
      regexCheck = `^[a-zA-Z]{${min},${max}}$`;

    } else{ // validated as infinite
      max = '';
      console.log('max is now: '+'infinite');
      regexOutput.value = `/^[a-zA-Z]{${min},${max}}$/`;
      regexCheck = `^[a-zA-Z]{${min},${max}}$`;

    }
  }

});


/*

const checkForError = () => {
  const showError = document.querySelector('.showError');

  if(this.value !== null && document.querySelector('#minLetters').value !== null){
    (min >= max ? showError.style.display = "block" : showError.style.display = "none")
  } else return

}

*/
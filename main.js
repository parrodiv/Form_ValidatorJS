//VARIABLES DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//SHOWERROR FUNCTION
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//SHOWSUCCESS FUNCTION
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success'
}

//CHECK VALID EMAIL
function checkEmail(email){
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (re.test(email.value.trim())){
        showSuccess(email);
    }else{
        showError(email, `${getFieldName(email)} is not valid`);
    }
}

//CHECK PASSWORDS MATCH
function checkPasswordsMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, `Passwords do not match, please check them`)
    }
}

//CHECK REQUIRED FIELDS
function checkRequired(inputArr){
    inputArr.forEach( input => {
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//CHECK LENGTH USERNAME E PASSWORD
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else{
        showSuccess(input);
    }
}

// GET FIELD NAME WITH CAPITAL LETTER
function getFieldName(input){
    return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`
}


//EVENT LISTENERS
form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})
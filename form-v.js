const form = document.getElementById("form");
const uname = document.getElementById("name");
const email = document.getElementById("mail-id");
const checkBox = document.getElementById("tc");
const submitContainer = document.getElementById("submit-container");


uname.addEventListener('keydown', function(e){
    var key = e.key
    if (/^\d$/.test(key)) {
        e.preventDefault();
      }
})

email.addEventListener("input", function(e){
    var inputValue = e.target.value;
    if(inputValue.length >25){
        e.preventDefault();
        e.target.value = inputValue.slice(0,25);
    }
})

function showError(input, message){
 const formControl = input.parentElement;
 formControl.className = 'form-list error';
 const small = formControl.querySelector('small');
 small.innerText = message;
 small.style.visibility = "visible"
}

function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'form-list success';
    const small = formControl.querySelector('small');
    small.style.visibility = "hidden"
}

function emailCheck(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }


form.addEventListener('submit',function(e){
e.preventDefault();
    
    if(uname.value.trim() ===''){
      showError(uname, 'Name cannot be empty');
    }
    else if(uname.value.length < 3){
        showError(uname,'Name must have more than three characters');
    }
    else if(uname.value.length > 15){
        showError(uname,'Name is too big');
    }
    else{
        showSuccess(uname)
    }

    if(email.value.trim() ===''){
        showError(email, 'Email cannot be empty');
      }
      else if(!emailCheck(email.value.trim())){
        showError(email, 'please enter a valid mail address')
      }
      else{
          showSuccess(email)
      }
      if(!checkBox.checked){
        showError(checkBox, 'agree to terms and conditions');

      }
      else{
        showSuccess(checkBox)
      }
    
})

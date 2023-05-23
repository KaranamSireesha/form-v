const form = document.getElementById("form-list")
const fname = document.getElementById("name");
const mailId = document.getElementById("mail-id");
const tc = document.getElementById("tc");
const submitButton = document.getElementById("sub-btn")
const password = document.getElementById("pass")
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
form.addEventListener("change", stateHandle);
function stateHandle() {
 if (document.getElementById("form-list").value !="") {
    submitButton.disabled = false;
 }
 else {
    submitButton.disabled = true;
 }

}


function validate(){
    let nameValue = fname.value.trim();
    let emailValue = mailId.value.trim();
    let passwordValue = password.value.trim();

    if(nameValue ==='' ||  passwordValue ==='' ||emailValue ==='' ){
        alert("please fill all the feilds");
        return false
    }
    else if(!emailCheck(emailValue)){
        alert("please enter a valid emailId")
        return false
    }
   
    else if(!tc.checked){
        alert("agree to terms and conditions");
    }
    else{
        return true;
    }
    
    function emailCheck(input) {
        let valid = emailregex.test(input);
        return valid;
    }

    

    
}


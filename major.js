
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const copassword = document.getElementById('copassword');
const phoneno = document.getElementById('phoneno');

form.addEventListener('click', suBmit);
function suBmit(event){
    event.preventDefault();
    examineData();
}


function examineData(){//creating a function that validates the values we write when we submit the form 
    const oneValue = username.value.trim();// trim is used to remove white spaces from both sides
    const twoValue = email.value.trim();
    const threeValue = password.value.trim();
    const fourValue = copassword.value.trim();
    const fiveValue = phoneno.value.trim();

//condtions for name 
    if(oneValue ==""){//empty value conditions
        errorPop(username,"This field can't be blank");
    }else if(!letterOnly(oneValue)){//checking for aphabets only
        errorPop(username,"Alphabets only");
    }
    else if(oneValue.length<5){//name  should not be less than 5 letters
        errorPop(username,"Name cannot be less than 5 characters")
    }
    else{
        successPop(username);//calling success function
    }
//conditons for  email 
    if(twoValue ==""){//empty value conditions
        errorPop(email,"Email can't be blank");
    }else if(!isEmail(twoValue)){// checking the format of email entered
        errorPop(email,"Email is not valid");
    }
    else{
        successPop(email);//calling success function
    }
//conditions for password 
    if (threeValue ==""){//empty value conditions
        errorPop(password,"password cannot be blank");
    }else if(threeValue == oneValue){//password should not be same  as name
        errorPop(password, "password cannot be your name");
    }
    else if(threeValue == "password"){//this pattern cannot be a password
        errorPop(password, "password cannot be password");
    }
    else if(threeValue.length < 8){//length of the password should not be less than 8 characters 
        errorPop(password, "password cannot be less than 8 characters");
    }
    else{
        successPop(password);//calling success function
    }
//conditions for confirm password 
    if(fourValue ==""){//empty value conditions
        errorPop(copassword,"Confirm Password can't be blank");
    } else if(threeValue !== fourValue){//confirm password and password should be same
        errorPop(copassword , "Confirm Password isn't same as password");
    }
    else{
        successPop(copassword);//calling success function
    }
//condition for phone number
    if(fiveValue == ""){//empty value conditions
        errorPop(phoneno, "This cannot be blanked");
    }else if(isNaN(fiveValue)){//value should be only numbers
        errorPop(phoneno,"Phone number can only be numbers");
    } 
    else if(fiveValue.length != 10){// length of the phonenumber sould be 10 digits only
        errorPop(phoneno,"Phone number should be of 10 digits");
    } else if(fiveValue == 1234567890){//this pattern of phoneNo. cannot be accepted
        errorPop(phoneno, "This cannot be a phone number");
    }
    else{
        successPop(phoneno);//calling success function
    }
}
    
//creating a function for error 
function errorPop(x, message){
    const errorBox = x.parentElement;
    errorBox.className = "form-control error";
    const small = errorBox.querySelector('small');
    small.innerText = message;
    
}
//creating a function for success
function successPop(x){
    const successBox = x.parentElement;
    successBox.className = "form-control success";
    
}

//creating a function for email format using regular expression
function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}
// creating a function to check for alphabets only 
function letterOnly(k){
    var ltrs = /^[A-Za-z\s]+$/;
    return ltrs.test(k);
}

const signUp=document.getElementById('sign-up');

signUp.addEventListener('click', (e)=>{
    e.preventDefault();
    captcha_checker();
    password_checker();
    confirmPassword();
    firstNameValidation();
    lastNameValidation();
    emailValidation();
});

    // ---------------------------------------------------------------------------------------


            // Captcha Generator

const ref=document.getElementById('ref');
const input=document.getElementById('input');
const output=document.getElementById('output');

function random(e){

    var cap=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
    
    //This is generating random index

    var a=cap[Math.floor(Math.random()*62)];
    var b=cap[Math.floor(Math.random()*62)];
    var c=cap[Math.floor(Math.random()*62)];
    var d=cap[Math.floor(Math.random()*62)];
    var e=cap[Math.floor(Math.random()*62)];
    var f=cap[Math.floor(Math.random()*62)];
    let captcha=a+b+c+d+e+f;
    output.value=captcha;
    input.value="";
    }
    ref.addEventListener('click' ,random);
    window.addEventListener('load' ,random);

    // ---------------------------------------------------------------------------------------

    //Captcha Checker

    function captcha_checker(){
        if(input.value != output.value){
            input.value="";
            input.placeholder="Invalid";
            input.style.border="1px solid red";
        input.addEventListener('focus',(e)=>{
            input.style.border="1px solid black";
            input.value="";
            input.placeholder="Enter Your Captcha";
        });
    }
    }

    // ---------------------------------------------------------------------------------------


//   Password Checker

function password_checker(){
    const password=document.getElementById('password');
    let passwordValue=password.value;
    const inValid=document.getElementById('pass-div');
let upperCase=/[A-Z]/;
let lowerCase=/[a-z]/;
let number=/[0-9]/;
let space=/[\s]/;
let specail=/[! @ # $ % ^ & * ( ) _ ]/;
let lowerCaseresult=lowerCase.test(passwordValue);
let upperCaseresult=upperCase.test(passwordValue);
let numberresult=number.test(passwordValue);
let specailresult=specail.test(passwordValue);
let spaceCase=space.test(passwordValue);


// console.log(passwordValue)
let length=passwordValue.split('').length;     //Password Length
if(length==0){
    inValid.style.display="block";
    inValid.innerHTML="Enter Password";
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid blue";
    });
}
else if(spaceCase){
    inValid.style.display="block";
    inValid.innerHTML="Do not use space";
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid blue";
    });
}
   else if(length<6){
        inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Password Length Should be minimum 6 digit"}`;
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid black";
    });
}
else if(!(lowerCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one LowerCase Character"}`;
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid black";
    });
}
else if(!(upperCaseresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one UpperCase Character"}`
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid black";
    });
}
else if(!(numberresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast one Number Character"}`
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid black";
    });
}
else if(!(specailresult)){
    inValid.style.display="block";
    inValid.innerHTML=`<i class="fa fa-warning" aria-hidden="true" id="pass-valid"></i> ${"Atleast Special Character"}`
    password.style.border="1px solid red";
    password.addEventListener('focus',()=>{
        inValid.style.display="none";
        password.style.border="1px solid black";
    });
}

}

    // ---------------------------------------------------------------------------------------


    // Validation  Between enter and confirm password

    function confirmPassword(){
    const password=document.getElementById('password');
    let passwordValue=password.value;
    const confirmpassword=document.getElementById('confirm-password');
    console.log(confirmpassword.value);
    let confirmpasswordValue=confirmpassword.value;
    let passDiv=document.getElementById('same-pass');
    if(passwordValue != confirmpasswordValue){
    passDiv.style.display="block";
        passDiv.innerText="Invalid";
        confirmpassword.style.border="1px solid red";
        confirmpassword.addEventListener('focus',()=>{
        passDiv.style.display="none";
        confirmpassword.style.border="1px solid black";
        })
        }
    }


    // ---------------------------------------------------------------------------------------

// Validation for firstName

function firstNameValidation(){
    const fName=document.getElementById('f-name');
    const fnameValue=fName.value;
    const valid=document.getElementById('f-name-validation');
    let upperCase=/[A-Z]/;
    let firstChar=fnameValue.split('')[0];
    if(fnameValue==0){
        valid.style.display="block";
        valid.innerHTML="Enter your name";
        fName.style.border="1px solid red";
        fName.addEventListener('focus',()=>{
        valid.style.display="none";
        valid.innerHTML="";
        fName.style.border="1px solid black";
        })
    }
    else{
        if(!(upperCase.test(firstChar))){
            valid.style.display="block";
                valid.innerHTML="First Character Should be in Uppercase"
                fName.style.border="1px solid red";
                fName.addEventListener('focus',()=>{
                valid.style.display="none";
                valid.innerHTML="";
                fName.style.border="3px solid black";
                })
    }
    }
}
    // ---------------------------------------------------------------------------------------


// Validation for lastName

function lastNameValidation(){
    const lName=document.getElementById('l-name');
    const lNameValue=lName.value;
    const valid=document.getElementById('l-name-validation');
    let firstChar=lNameValue.split('')[0];
    let upperCase=/[A-Z]/;
    if(lNameValue==0){
        valid.style.display="block";
        valid.innerHTML="Enter your  surname";
        lName.style.border="1px solid red";
        lName.addEventListener('focus',()=>{
        valid.style.display="none";
        valid.innerHTML="";
        lName.style.border="1px solid black";
        })
    }
    else{
        if(!(upperCase.test(firstChar))){
            valid.style.display="block";
                valid.innerHTML="First Character Should be in Uppercase"
                lName.style.border="1px solid red";
                lName.addEventListener('focus',()=>{
                valid.style.display="none";
                valid.innerHTML="";
                lName.style.border="1px solid black";
                })
    }
}
}

    // ---------------------------------------------------------------------------------------

    // validation for email address

    function emailValidation(){
        const email=document.getElementById('email');
        const emailValue=email.value;
        const emailval=document.getElementById('emailval');
        let regex=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        console.log(regex.test(emailValue));
        if(!(regex.test(emailValue))){
            emailval.style.display="block";
            email.style.border="1px solid red";
            emailval.innerHTML="Enter Valid Email Address";
                email.addEventListener('focus',()=>{
                    emailval.style.display="none";
            email.style.border="1px solid black";
            })
        }
    }


    // ---------------------------------------------------------------------------------------
    
    //for search box

    const searchBox=document.getElementById('search-box');
    const searchBoxValue=searchBox.value;
    const searchicon=document.getElementById('search-icon');

    searchBox.addEventListener('input',()=>{
        searchicon.style.display="none";
    });
    searchBox.addEventListener('blur',()=>{
        if(searchBoxValue == " "){
            console.log(searchBoxValue)
            searchicon.style.display="block";
        }
    });
    
    // ---------------------------------------------------------------------------------------

    
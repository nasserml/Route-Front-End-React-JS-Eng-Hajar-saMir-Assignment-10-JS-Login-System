var signupName= document.getElementById('signupName');
var signupEmail=document.getElementById('signupEmail');
var signupPassword=document.getElementById('signupPassword');
var signupButton=document.getElementById('signupButton');
var signupError=document.getElementById('signupError');

var usersList;

if(localStorage.getItem('usersList')!= null){
    usersList=JSON.parse(localStorage.getItem('usersList'));
}  else{
    usersList=[];
}

signupButton.onclick=function(){

    
    if(!checkIfTheUserExists()) {
        signupError.innerHTML=`<span class="text-danger m-3">User already exists</span>`;
        return false;
    }


    signupUser();

    
    
}




function checkIfTheUserExists(){

    for(var i=0; i< usersList.length; i++){
        console.log(usersList[i]);
        if(usersList[i].userEmail == signupEmail.value.trim().toLowerCase()){
            return false;
        }
    }
    return true;
}


function signupUser(){

    if(validation(signupName)&&validation(signupEmail)&&validation(signupPassword)){
        var userObject= {
            userName: signupName.value,
            userEmail:signupEmail.value.trim().toLowerCase(),
            userPassword:signupPassword.value
          
        }
    
        usersList.push(userObject);
        localStorage.setItem('usersList', JSON.stringify(usersList));
        
        clearSignupForm(); 
        reDirectToLoginPage();

        return true;

       
    }

   
}


function clearSignupForm(){
    signupName.value=null;
    signupEmail.value=null;
    signupPassword.value=null;
}

function reDirectToLoginPage(){
    location.href='./index.html';
}


function validation(ele){
    var regex= {
        signupName: /^[a-zA-z\s]{3,}$/,
        signupEmail:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        signupPassword:/^.{3,}$/
    }

    if(regex[ele.id].test(ele.value.trim())){
        ele.classList.add('is-valid');
        ele.classList.remove('is-invalid');
        ele.nextElementSibling.classList.replace('d-block','d-none');
        return true;
    } else{
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');
        ele.nextElementSibling.classList.replace('d-none','d-block');
        return false;

    }
}




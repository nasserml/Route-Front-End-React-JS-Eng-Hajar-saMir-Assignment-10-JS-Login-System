var loginEmailInput=document.getElementById('loginEmail'); 
var loginPasswordInput=document.getElementById('loginPassword'); 
var loginButton=document.getElementById('loginButton');
var loginError= document.getElementById('loginError');



var usersList;

if(localStorage.getItem('usersList') != null){
    usersList=JSON.parse(localStorage.getItem('usersList'));
} else{
    usersList=[];
}


loginButton.onclick=function(){

    // console.log('clicked');
    if(!checkForAllInputs() ){

        allInputsRequired();
        return false;
    };

    if(!login()){
        loginErrorEmailOrPassword();
        return false;
    }
    ;
    redirectToHomePage();
}


function checkForAllInputs(){
    if(loginEmailInput.value.trim()==''||loginPasswordInput.value.trim()==''){
        return false;
    }   
    return true;
}

function allInputsRequired(){
    loginError.innerHTML=`<span class="text-danger m-3">All inputs required</span>`;
}

function login() {

    for(var i=0; i< usersList.length; i++){
        
        if(usersList[i].userEmail==loginEmailInput.value && usersList[i].userPassword==loginPasswordInput.value){
            localStorage.setItem('loggedInUserName', usersList[i].userName);
            return true;
        }
    }
    return false;
}

function loginErrorEmailOrPassword(){
    loginError.innerHTML=`<span class="text-danger m-3">incorrect email or password</span>`
}

function redirectToHomePage(){
    window.location.href='./home.html'
}
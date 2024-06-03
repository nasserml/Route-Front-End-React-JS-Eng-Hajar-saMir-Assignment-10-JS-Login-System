var logoutButton = document.getElementById('logoutButton');

var welcomeNameH1=document.getElementById('welcomeName');

if(localStorage.getItem('loggedInUserName') == null) {
    redirectToLoginPage();
} else{
    displayWelcome();
}

logoutButton.onclick= function(){
    
    logout();
    redirectToLoginPage();
}

function logout(){
    localStorage.removeItem('loggedInUserName')
}

function redirectToLoginPage(){
    window.location.href='./index.html';
}


function displayWelcome(){
    var loogedInUserName=localStorage.getItem('loggedInUserName');
    welcomeNameH1.innerHTML=`Welcome ${loogedInUserName}`
}
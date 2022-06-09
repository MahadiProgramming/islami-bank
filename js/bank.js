document.getElementById('login-submit').addEventListener
('click',function(){
    //get user email
     const emailField = document.getElementById('user-email').value;
     const userEmail = emailField.value;
    //get user password
     const passwordField = document.getElementById('user-password');
     const userPassword = passwordField.value;
    
     //check email & password
    if(userEmail == 'islam@gmail.com' &&  userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
})
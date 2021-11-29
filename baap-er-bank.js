document.getElementById('login-btn').addEventListener('click',function(){
    const userField = document.getElementById('email-field');
    const userEmail = userField.value;
    

    //get user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    
    if (userEmail == 'sontan@gmail.com' && userPassword == "secret"){
        window.location.href = 'banking.html'
    }
    else(
        console.log('your information is wrong')
    )
})
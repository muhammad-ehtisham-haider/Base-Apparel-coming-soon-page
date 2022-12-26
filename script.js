function checkEmail() {  
    var email = document.getElementById('emails');  
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    if (!filter.test(email.value)) {  
        
        // alert('Please provide a valid email address'); 
        document.getElementById('show').style = ('visibility' , ' visible')
        document.getElementById('emails').style.border = ('2px solid red')
  
        email.focus;  
        return false;  
    }  
}



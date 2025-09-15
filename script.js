function name_logic(){
    var name = document.getElementById("name").value;
    
    if (name.trim()== ""){
        return false
    }else{
        return true
    }
};

function email_logic(){
    var email = document.getElementById("email").value;
    
    if (email.includes("@") && email.includes(".")){
        return true
    }else{
        return false;
    }
}

function password_logic(){
    var password = document.getElementById("password").value
    if(password.trim() !== "" && !password.includes(" ") && password.length >= 8 ){
        return true;
    }else{
        return false;

    }
}

function phone_number_logic(){
    var phone_number = document.getElementById("number").value
    if(phone_number.length == 10 && phone_number.trim() !== "" ){
        return true;
    }else{
        return false;
    }
}

function submit_logic(){
    var email_logicx = email_logic();
    var name_logicx = name_logic();
    var password_logicx = password_logic();
    var phone_number_logicx = phone_number_logic();

    if (email_logicx && name_logicx && password_logicx && phone_number_logicx){
        alert("Regisrtation Successfull")
    }else{
        alert("registration Faild")
    }
    
}

document.getElementById('signin_button').addEventListener('click', submit_logic);
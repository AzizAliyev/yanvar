function myfunk(){
    var password = document.getElementById("login").value;
    if(password.length >= 6 && password != ""){
        alert("Xos gelmisiniz")
    }
    else if(password.length<=6) {
        alert("Minimum 8 olmalidir")
    }
}

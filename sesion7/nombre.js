function validar_formulario(){
    var username = document.formRegistro.usuario;
    var email = document.formRegistro.correo;
    var password = document.formRegistro.pass;
    var seleccionado=document.getElementById('condiciones').checked;

    var username_len=username.value.length;
    var password_len=password.value.length;
    var email_len=email.value.length;
  
    expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(username_len<8 || username_len==0){
        alert("Se solicita ingresar el nombre de usuario");
    }
    if(password_len<8 || password_len==0){
        alert("Se solicita ingresar el valor de password");
    }
    if(email_len==0 || !email.value.match(expresion)){
        alert("Revisar correo");
    }
    if(!seleccionado){
        alert("Se debe seleccionar las condiciones");
    }
}
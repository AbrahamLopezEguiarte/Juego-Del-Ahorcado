function check(e){
    // Recibimos todas las teclas
    tecla = (document.all) ? e.keyCode : e.which;
    // En caso de ser la tecla para eliminar permitiremos que sea utilizada
    if (tecla == 8) {
        return true;
    }
    // En caso de ser otra tecla la compararemos con una expresión regular para saber si es un caracter especial o una mayúscula
    patron = /[a-zA-Z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

document.querySelector('#replay').addEventListener('click', () =>{
    window.location.reload();
})
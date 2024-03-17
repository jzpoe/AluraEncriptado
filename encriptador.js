


function encriptar (){

    let txt = document.getElementById('texto-encriptar').value.toLowerCase();

    var encriptar =  txt.replace(/e/img, 'enter')
    var encriptar =  encriptar.replace(/i/img, 'imes')
    var encriptar =  encriptar.replace(/a/img, 'ai')
    var encriptar =  encriptar.replace(/o/img, 'ober')
    var encriptar =  encriptar.replace(/u/img, 'ufat')


    document.getElementById('encriptado').value=encriptar
    
    
}

function desencriptar (){
    let txt = document.getElementById('texto-encriptar').value.toLowerCase();

    var encriptar1 =  txt.replace(/e/img, 'enter')
    var encriptar1 =  encriptar1.replace(/imes/img, 'i')
    var encriptar1 =  encriptar1.replace(/ai/img, 'a')
    var encriptar1 =  encriptar1.replace(/ober/img, 'o')
    var encriptar1 =  encriptar1.replace(/ufat/img, 'u')


    document.getElementById('encriptado').value=encriptar1 
    
}


document.addEventListener('DOMContentLoaded', function limpiar(){

    let botonLimpiar = document.getElementById('btn-limpiar')
    let limpiarCampo = document.getElementById('encriptado')
    let limpiarCampo2 = document.getElementById('encriptar1')

    botonLimpiar.addEventListener('click', function (){
        limpiarCampo.value= ''
        limpiarCampo2.value= ''
    })


})
function limpiar() {
    document.getElementById('encriptado').value = '';
}

// Función para copiar el contenido del textarea al portapapeles
function copiar() {
    const textareacopi = document.getElementById('encriptado')
    textareacopi.select();
    document.execCommand('copy');
    // Opcional: mostrar un mensaje o realizar alguna acción adicional después de copiar
    alert('copiado')
    limpiar()

}



    







const ruta = window.location.href
const url = ruta
const params = new URLSearchParams(url);

// constantes de obtencion de los parametros

const email = params.get('email')

console.log('Hola gracias por contactarnos te enviaremos un mensaje al siguiente gmail ', email )
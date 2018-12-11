var socket = io();

// Escuchar (eventos)
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    
    console.log('Perdimos conexión con el servidor');

});


// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Hola Mundo'
}, function( resp ) {
    console.log( 'Respuesta server: ', resp );
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:',mensaje);
});

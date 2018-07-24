var socket = io();

socket.on('connect', function() {
    console.log('connect to server');

    socket.emit('createMessage', {
        to: 'Andrew@example.com',
        text: 'Hey, this is Andrew'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('NewMessage', message);
});

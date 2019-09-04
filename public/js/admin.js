let socket = io();

$(document).ready(function(){
    $('#notice_btn').on('click', function(){
        let msg = $('#message').val();
        socket.emit('trigger','notice',msg);
    })

    $('#timer_btn').on('click', function(){
        socket.emit('trigger','timer');
    })
})
let socket = io();

socket.on('test',function(msg){
    console.log(msg);
})

$(document).ready(function(){
    $('#clock').countdown('2019/09/06 15:00:00', function (event) {
        $(this).html(event.strftime(
            `<span class="num">%H</span>
            <span class="colon">:</span>
            <span class="num">%M</span>
            <span class="colon">:</span>
            <span class="num">%S</span>`
        ));
    });

    socket.on('notice', function(msg){
        $('.timer_area').hide();
        $('#notice').show();
        $('#notice').html(msg.replace(/\n/gi, '<br>'));
    });

    socket.on('timer', function(){
        $('.timer_area').show();
        $('#notice').hide();
    })
})
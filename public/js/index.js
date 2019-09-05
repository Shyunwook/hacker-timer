let socket = io();

$(document).ready(function(){
    $('#clock').countdown('2019/09/06 09:00:00', function (event) {
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
        $('#notice').html(decodeURIComponent(msg).replace(/\n/gi, '<br>'));
        $('#poster').hide();
    });

    socket.on('timer', function(){
        $('.timer_area').show();
        $('#notice').hide();
        $('#poster').hide();
    });

    socket.on('poster', function(){
        if(window.outerHeight > window.outerWidth){
            $('#poster').show();
            $('.timer_area').hide();
            $('#notice').hide();
        }else{
            $('.timer_area').show();
            $('#notice').hide();
            $('#poster').hide();
        }
    })
})
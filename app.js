$(function(){
    var yourSound = new Audio('notification.ogg');
    yourSound.loop = true;
    $('.start button').click(function(ev){
        $('.start').toggleClass('hidden');
        $(".example").TimeCircles({
            "animation": "ticks",
            "count_past_zero": false,
            "circle_bg_color": "#f1f1f1",
            "time": {
                    Days: {
                    show: false
                },
                Hours: {
                    show: false
                },
                Minutes: {
                    color: "#1abc9c"
                },
                Seconds: {
                    color: "#e74c3c"
                }
            }
        }).addListener(function(unit, value, total){
            if(!total){
                yourSound.play();
                $('.stop').toggleClass('hidden');
            }
        });
    });

    $('.stop button').click(function(ev){
        yourSound.pause();
        $(".example").TimeCircles().destroy();
        $('.stop').toggleClass('hidden');
        $('.start').toggleClass('hidden');
    });
});
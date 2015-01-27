$(function(){
	var yourSound = new Audio('notification.ogg');
	yourSound.loop = true;
	$('.start button').click(function(ev){
		$('.start').toggleClass('hidden');
		$(".example").TimeCircles({
  		"animation": "ticks",
  		"count_past_zero": false,
  		"circle_bg_color": "#fff",
  		"time": {
  			Days: {
                show: false,
                text: "Days",
                color: "#FC6"
            },
            Hours: {
                show: false,
                text: "Hours",
                color: "#9CF"
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
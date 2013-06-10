$(document).ready(function() {
	
	

	
	$('button').click(function(){
	var getZip = $('input').val();

  
  
  $.simpleWeather({
    zipcode: getZip,
    woeid: '2357536',
    location: '',
    unit: 'f',
    success: function(weather) {
	
		console.log(weather.code);
		html = '<h2 id="city">'+weather.city+', '+weather.region+'</h2>';	
		//get qweather data
		//todays weather
		html += '<div class="icon"><img src ="img/'+weather.code+'.svg" /></div>';
		html += '<div class="current"><h2>Currently</h2><h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1><h2>'+weather.forecast+'</h2></div>';
		
		
		//change background color
		$('body').addClass('bg' + weather.code);
		
		
		
		//console.log(weather.code);
		
		//put weather data in container	
      $("#weather").html(html);
    },
	
	
	//wont connect to yahoo
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
});
	
	
});

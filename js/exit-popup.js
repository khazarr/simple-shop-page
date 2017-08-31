$(document).mousemove(function(e) {

			$('#exit-popup').css('left', (window.innerWidth/2 - $('#exit-popup').width()/2));
			$('#exit-popup').css('top', (window.innerHeight/2 - $('#exit-popup').height()/2));

			if(e.pageY <= 5)
			{

				// Show the exit popup
				$('#exit-popup').fadeIn();
			}

		});

		$('#go-back-exitpopup').click(function(){
			$('#exit-popup').slideUp();
		});

$(document).ready(function(){	

	$('.focused a').focus();
});

$(document).keydown(function(e){
	var pathname = window.location.pathname;
	if (pathname === '/login') {
		switch (e.which) {
				case 39:/*Right*/
					if ($('#home').is('span.focused.focusable')) {
						$('.focused').removeClass('focused');
						$('#history').addClass('focused');
			}
			else if ($('#history').is('span.focused.focusable')) {
						$('.focused').removeClass('focused');
						$('#log').addClass('focused');
					}
			$('.focused a').focus();
					break;
				case 37:/**Left */
					if ($('#history').is('span.focused.focusable')) {
						$('.focused').removeClass('focused');
						$('#home').addClass('focused');
			}
			else if ($('#log').is('span.focused.focusable')) {
						$('.focused').removeClass('focused');
				$('#history').addClass('focused');
				$('.focused a').focus();
					}
			$('.focused a').focus();
					break;
				case 40:/**Down */
					if ($('.menu span').hasClass('focused')) {
						$('.focused').removeClass('focused');
						$('#user').addClass('focused');
					}
					else if ($('#user').hasClass('focused')) {
						$('.focused').removeClass('focused');
						$('#pass').addClass('focused');
					}
					else if ($('#pass').hasClass('focused')) {
						$('.focused').removeClass('focused');
						$('#.formButton').addClass('focused');
					}
					else if ($('.formButton').hasClass('focused')) {
						$('.focused').removeClass('focused');
						$('#register').addClass('focused');
					}
					$('.focused').focus();
					break;
				case 38:/**Up */
					if ($('#register').hasClass('focused')) {
							$('.focused').removeClass('focused');
							$('.formButton').addClass('focused');
							$('.focused').focus();
					}
					else if ($('.formButton').hasClass('focused')) {
							$('.focused').removeClass('focused');
							$('#pass').addClass('focused');
							$('.focused').focus();
					}
					else if ($('#pass').hasClass('focused')) {
							$('.focused').removeClass('focused');
							$('#user').addClass('focused');
							$('.focused').focus();
					}
					else if ($('#user').hasClass('focused')) {
							$('.focused').removeClass('focused');
							$('#home').addClass('focused');
							$('.focused a').focus();
			}
			
			break;
			case 27:/**Esc */
				window.location.replace("/");
			break;
			}
	}
});
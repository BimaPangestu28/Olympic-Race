$(document).ready(function(){

	$("#restartButton").on('click', function(){
		window.location.reload();
	});

	// inisialisasi
	var position  =   0,
		line      =	  1,
		runner    =   1,
		line_post =   [120, 100, 60],
		size_run  =   [50, 75, 100];

	$("#startButton").on('click', function(){

		var body = setInterval(function(){

			position++;
			$("body").scrollLeft(position);
			$("#runner").css("margin-left", position + 'px');
			$("#runner img").css('width', size_run[line]);

			if (position == 628) {
				$("#amazon img").slideDown("slow");
			}

			if (position == 1492) {
				$("#bahia img").show();
			}

			if (position == 2332) {
				$("#parana img").slideDown("slow");
			}

			if (position == 3184) {
				$("#saopaulo img").slideDown("slow");
			}

			if (position == 4000) {
				$("#rio img").slideDown("slow");
			}

			if (position == 4807) {
				$("#runner").animate({
					bottom: 185
				})
			}

			if (position == 5143) {
				clearInterval(body);
				clearInterval(lari);
				$("#pyre img").attr('src', 'imgs/pyre_fire.svg');
				$("#runner img").attr('src', 'imgs/runner_1.png');
				$("#end").removeClass('hide');
				$(".box .error").addClass('hide');
			}

			if (position == 2300 && line == 0) {
				if ($("#runner").hasClass('jump') == false) {
					clearInterval(body);
					clearInterval(lari);
					$("#end").removeClass('hide');
					$(".box .success").addClass('hide');
					console.log('mati');
				}
			}

			if (position == 2700 && line == 1) {
				if ($("#runner").hasClass('jump') == false) {
					clearInterval(body);
					clearInterval(lari);
					$("#end").removeClass('hide');
					$(".box .success").addClass('hide');
					console.log('mati');
				}
			}

			if (position == 3000 && line == 2) {
				if ($("#runner").hasClass('jump') == false) {
					clearInterval(body);
					clearInterval(lari);
					$("#end").removeClass('hide');
					$(".box .success").addClass('hide');
					console.log('mati');
				}
			}

		}, 1);

		$(document).keydown(function(e){

			var code  =  e.keyCode;

			if (code == 38 && line != 0 && position < 4807) {
				line -= 1;
				$("#runner").css('bottom', line_post[line]);
				$("#runner img").css('width', size_run[line]);
			}

			if (code == 40 && line != 2 && position < 4807) {
				line += 1;
				$("#runner").css('bottom', line_post[line]);
				$("#runner img").css('width', size_run[line] + 'px');
			}

			if (code == 32 && position < 4807) {
				var jumph =   line_post[line];
				var jump  =   setInterval(function(){
					if (jumph < 121) {
						jumph += 100;
						$("#runner").addClass("jump");
					} else {
						jumph = line_post[line];
						setInterval(function(){
							if ($("#runner").hasClass("jump")) {
								$("#runner").removeClass("jump");
							}
						}, 4000)
						clearInterval(jump);
					}
					$("#runner").animate({
						bottom: jumph
					});
				}, 1);
			}

		});

		var lari = setInterval(function(){
			runner++;
			if (runner == 4) {
				runner =  1;
			}

			$("#runner img").attr('src', 'imgs/runner_'+runner+'.png');
		}, 100);

	});


});
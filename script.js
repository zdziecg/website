jQuery(function ($) {
            // reset scrolla
            $.scrollTo(0);

            $('#link1').click(function () { $.scrollTo($('.shop'), 500); });
            $('#link2').click(function () { $.scrollTo($('.shop'), 500); });
            $('#link3').click(function () { $.scrollTo($('.model'), 500); });
            $('#link4').click(function () { $.scrollTo($('.contact'), 500); });
        }
        );
        var numer = Math.floor(Math.random()*5)+1;
			
			var timer1 = 0;
			var timer2 = 0;
			
			function ustawslajd(nrslajdu)
			{
				clearTimeout(timer1);
				clearTimeout(timer2);
				numer = nrslajdu - 1;
				
				schowaj();
				setTimeout("zmienslajd()", 500);
				
			}
			
			function schowaj()
			{
				$("#slider").fadeOut(500);
			}
		
			function zmienslajd()
			{
				numer++; if (numer>4) numer=1;
				
				var plik = "<img src=\"img/foto" + numer + ".jpg\" />";
				
				document.getElementById("slider").innerHTML = plik;
				$("#slider").fadeIn(500);
				
				timer1 = setTimeout("zmienslajd()", 5000);
				timer2 = setTimeout("schowaj()", 4500);
			}

        $(document).ready(function() {
            var NavY = $('.menu').offset().top;
              
            var stickyNav = function(){
            var ScrollY = $(window).scrollTop();
                   
            if (ScrollY > NavY) { 
                $('.menu').addClass('sticky');
            } else {
                $('.menu').removeClass('sticky'); 
            }
            };
              
            stickyNav();
              
            $(window).scroll(function() {
                stickyNav();
            });
            });

            // (function () {
            //     new Slider("#slider3 .slide").options({
            //         prev: "#slider3 nav button.arrow-prev",
            //         next: "#slider3 nav button.arrow-next",
            //         nav: "#slider3 nav.dots span",
            //         animation: "fade"
            //     }).init();
            //   })();
$(document).ready(function(){
	
	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});
	$(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
		$('header').removeClass('toggle');

		if($(window).scrollTop() > 0){
			$('.top').show();
		}else{
			$('.top').hide();
		}

    });
	// smooth scrolling

 $('a[href*="#"]').on('click',function(e){

    e.preventDefault();
    $('html, body').animate({
    scrollTop : $($(this).attr('href')).offset().top,

	},
	500,
	'linear'
	);

	});

	});

// contact start

$(".button2").click(function(){
  alert("This Message Unsuccessfull Delivery Can you ues our Email Address = ( shariful.islam.coder@gmail.com )");
});


// contact shes 

// start for skill Selection 

	$('svg.radial-progress').each(function( index, value ) { 
		$(this).find($('circle.complete')).removeAttr( 'style' );
	  });
	  $(window).scroll(function(){
		$('svg.radial-progress').each(function( index, value ) { 
		  // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
		  if ( 
			  $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
			  $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
		  ) {
			  // Get percentage of progress
			  percent = $(value).data('percentage');
			  // Get radius of the svg's circle.complete
			  radius = $(this).find($('circle.complete')).attr('r');
			  // Get circumference (2πr)
			  circumference = 2 * Math.PI * radius;
			  // Get stroke-dashoffset value based on the percentage of the circumference
			  strokeDashOffset = circumference - ((percent * circumference) / 100);
			  // Transition progress for 1.25 seconds
			  $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
		  }
		});
	  }).trigger('scroll');

	  
$(document).ready(function () {
	//automatic slides  
	'use strict';
	var slideIndex = 0;
 /*get the container for the image
  */
	var bubblesContainer = $('.call-img-container');
	function showSlides() {
		var i;
		var slides = $('.my-slides').get();
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
    	if (slideIndex> slides.length) {
			slideIndex = 1;
		}
		slides[slideIndex-1].style.display = "block"; 
		
		setTimeout(showSlides, 5000); // Change image every 5 seconds  
	}
	
	showSlides();
	function bubbles(){
		
		var minBubbleCount = 25, maxBubbleCount = 70, minBubbleSize = 2, maxBubbleSize = 9;
		
		/*random number of bubbles*/
		var bubbleCount = minBubbleCount + Math.floor(Math.random() * (maxBubbleCount+1));
		
		/*create the bubbles*/
		for(var x = 0; x< bubbleCount; x++){
			var elem = "<div class='bubble-container'><div class='bubbles'></div></div>";
			
			bubblesContainer.append(elem);
		}
		
		/*randomize bubble elements*/
		bubblesContainer.find('.bubble-container').each(function(){
			/*randomize bubble positions*/
			var posRand = Math.floor(Math.random()*101);
			
			/*randomize the size*/
			var sizeRand = minBubbleSize + Math.floor(Math.random() * (maxBubbleSize+1));
			
			/*randomize the time they start size*/
			var delayRand = Math.floor(Math.random() * 16);
			
			/*randomize the speed*/
			var speedRand = 3 + Math.floor(Math.random() * 9);
			
			/*random blur*/
			var blurRand = Math.floor(Math.random()*3);
			
			/*apply the new styles*/
			$( this ).css({
      'left' : posRand + '%',
      '-webkit-animation-duration' : speedRand + 's',
      '-moz-animation-duration' : speedRand + 's',
      '-ms-animation-duration' : speedRand + 's',
      'animation-duration' : speedRand + 's',
      
      '-webkit-animation-delay' : delayRand + 's',
      '-moz-animation-delay' : delayRand + 's',
      '-ms-animation-delay' : delayRand + 's',
      'animation-delay' : delayRand + 's',
      
      '-webkit-filter' : 'blur(' + blurRand  + 'px)',
      '-moz-filter' : 'blur(' + blurRand  + 'px)',
      '-ms-filter' : 'blur(' + blurRand  + 'px)',
      'filter' : 'blur(' + blurRand  + 'px)',
    });
		$( this).children('.bubbles').css({
			'width' : sizeRand + 'px',
			'height' : sizeRand + 'px'
		});
		});
	};

	bubbles(); 	
	});

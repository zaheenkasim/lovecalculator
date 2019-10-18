document.addEventListener('keypress', function(e){
    if(e.which===13){
        lCalculator();
        setTimeout(function(){
            window.location.reload(1);
         }, 3000);
    }
})


// var button=document.getElementById("ok");

// button.addEventListener("onclick",function()

// {lCalculator()

//     setTimeout(function(){
//         window.location.reload(1);
//      }, 3000);
//     }
// )



function lCalculator(){


	var responses = [
 			"None. None at all.",
 			"Not much chemistry.", 
 			"Possibly a couple of glances, but nothing to get excited about.",
			"Starting to show some promise.",
 			"You're half way there!",
 			"There is a real spark!",
			"Match made in heaven!",
			"This is love.",
             "These two need to be together.",
             "There is something about you both",
            
 	];


    //   if((c=" ") || (a=" ") || (b=" "))
    //  {
    //     document.querySelector('#result').innerHTML= responses[9];
        
    //  }
    
    //  else if((a="zaheen") || (b="zaheen"))
    //  {
    //     document.querySelector('#result').innerHTML= "you can not predict about boss"; 
    //  }
          var c = Math.random() * 100;
          c = Math.floor(c);
          document.querySelector('#percent').innerHTML= c + "%";
    


	 	if (c > 0 && c < 10)
		{
            
            document.querySelector('#result').innerHTML= responses[0];
		}

		else if (c >= 10 && c < 20) {
			document.querySelector('#result').innerHTML = responses[1];
		}

		else if (c >= 20 && c < 30) {
			document.querySelector('#result').innerHTML = responses[2];
		}

		else if (c >= 30 && c < 40) {
			document.querySelector('#result').innerHTML = responses[3];
        }
        else if (c >= 40 && c < 50) {
			document.querySelector('#result').innerHTML = responses[9];
		}

		else if (c >= 50 && c < 60) {
			document.querySelector('#result').innerHTML = responses[4];
		}

		else if (c >= 60 && c < 70) {
			document.querySelector('#result').innerHTML = responses[5];
		}

		else if (c >= 70 && c < 80) {
			document.querySelector('#result').innerHTML = responses[6];
		}

		else if (c >= 80 && c < 90) {
			document.querySelector('#result').innerHTML = responses[7];
		}

		else if (c >= 90 && c <= 100) {
			document.querySelector('#result').innerHTML = responses[8];
		}

    }
    
    lCalculator();
    setTimeout(function(){
        window.location.reload(1);
     }, 3000);
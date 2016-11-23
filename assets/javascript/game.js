// There will be four crystals displayed as buttons on the page.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Game design notes:



// Each crystal should have a random hidden value between 1 - 12.

	// The random number shown at the start of the game should be between 19 - 120.
	// x = 19, y = 120
	// Math.floor(Math.random() * ((y-x)+1) + x);
	// Math.floor(Math.random() * y + x);
	var targetNumber = Math.floor(Math.random() * 120 + 19);
		
		
	// The player will be shown a random number at the start of the game.
	$('#numberToGuess').text(targetNumber);

	var counter = 0;
	var wins = 0;
	var losses = 0;


	var bluecrystalNumber = Math.floor(Math.random() * 12 + 1);

	 var bluecrystalImage = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystala.jpg");

		bluecrystalImage.data("crystalvalue", bluecrystalNumber);

		$("#crystals").append(bluecrystalImage);

		$('.crystalImage').on('click', function() {

		var bluecrystalValue = ($(this).data("crystalvalue"));

			counter = counter + bluecrystalValue;
			$('#totalScore').text(counter);

			if (counter === targetNumber) {
				wins++;
				$('#playerStatus').text('You Win!');
				counter = 0;
				$('#totalScore').text(counter);
				targetNumber = Math.floor(Math.random() * 120 + 19);
				$('#numberToGuess').text(targetNumber);
					bluecrystalNumber = Math.floor(Math.random() * 12 + 1);
						bluecrystalValue = $(this).data("crystalvalue", bluecrystalNumber);

			} 
			else if (counter > targetNumber) {
				losses++
				$('#playerStatus').text('You Lose!');
				counter = 0;
				$('#totalScore').text(counter);
				targetNumber = Math.floor(Math.random() * 120 + 19);
				
				$('#numberToGuess').text(targetNumber);
					bluecrystalNumber = Math.floor(Math.random() * 12 + 1);

						bluecrystalValue = $(this).data("crystalvalue", bluecrystalNumber);
				
			}
                var html = 
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>";

                document.querySelector('#displayResults').innerHTML = html;

	});







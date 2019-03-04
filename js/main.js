(() => {
	//hook up the js file
	console.log("fired! ready to jam out");


	function playDrumSound(e){
		//e in round brackets is the event object->
		//gets generated with every event and passes some data through
		//debugger;
		//
		// try selecting the matching audio element 
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// the return keyboard stops js from running (any code below)
		if (!audio) { return;} 

		// play the audio track
		audio.currentTime = 0;
		audio.play();

		//selct the parent div and animated
		// try selcting the matching  parent div element
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add('playing')

	}

	function removePlayingClass(e){
		//listen for css transition to finish and then resetr the element
		//by removing the playing class
		
		if (e.propertyName !== "transform") {
			return;
		} else {
			console.log('do some stuff here, transition is done')

		}
	e.currentTarget.classList.remove("playing")
	}

	window.addEventListener('keydown', playDrumSound);

	const key = Array.from(document.querySelectorAll('.key'));

	key.forEach(key => key.addEventListener('transitionend', removePlayingClass));

})();

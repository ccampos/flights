define(function() {
	/**
	* Returns flight duration between departure and arrival cities
	* @method getDuration
	* @param {Number} distance
	* @param {Number} speed
	* @return {Number} duration
	*/
	function getDuration(distance, speed) {
		var dist = distance,
			sp = speed,
			duration;

		duration = distance / speed;

		return duration;
	};

	/**
	* Returns flight duration hours and minutes
	* @method getHrsMins
	* @param {Number} duration in decimal
	* @return {Object} hours and minutes
	*/
	function getHrsMins(duration) {
		var dur = duration,
			hours,
			decimal,
			minutes;

		hours = Math.floor(dur);

		// calculate minutes
		decimal = dur - hours;
		minutes = Math.round(decimal * 60);

		return {
			hours: hours,
			minutes: minutes
		}

	}

	return {
		getDuration: getDuration,
		getHrsMins: getHrsMins
	}
});
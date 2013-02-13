define(function() {
	/**
	* Returns random number
	* @method getRandom
	* @param {Number} limit
	* @return {Number}
	*/
	var getRandom = function (min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	};

	return {
		getRandom: getRandom
	};
});
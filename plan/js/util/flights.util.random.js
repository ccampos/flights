/**
* Returns random number
* @method getRandom
* @param {Number} limit
* @return {Number}
*/
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
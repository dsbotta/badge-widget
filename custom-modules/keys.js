//determine which type has the most points
	//store each point count within pointsArray
function returnKeys(object) {
	var newKeysArray = [];	

	var keys = Object.keys(object.points);

	function returnTotalKey(keysArray) {
		for(var i in keysArray) {
			if (keysArray[i].toLowerCase() !== "total") {
				newKeysArray.push(keysArray[i]);
			}
		}
	}
	returnTotalKey(keys);

	return newKeysArray;

};

module.exports = returnKeys;
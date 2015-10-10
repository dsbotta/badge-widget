var returnKeys = require('./keys.js');

function greatestKey(object) {
	var newObj = object;
	var tempArray = returnKeys(newObj);
	var pointsArray = [];
	for (var i in tempArray) {
		pointsArray.push(object.points[tempArray[i]]); 
	}

	var getMostPoints = function( array ){
   		return Math.max.apply( Math, array );
	};

	return getMostPoints(pointsArray);
};

module.exports = greatestKey;
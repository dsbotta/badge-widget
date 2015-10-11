var returnKeys = require('./keys.js');
var greatestKey = require('./largest_key.js');

function createObject(object) {
	var newObj = object;
	var pointsObject = {};
	var keys = returnKeys(newObj);
	for (var i in keys) {
		if ( object.points[keys[i]] > 0 ) {
			pointsObject[keys[i]] = {};
			pointsObject[keys[i]]['name'] = keys[i];
			pointsObject[keys[i]]['number'] = object.points[keys[i]];
			var newNum = (100/greatestKey(newObj)) * pointsObject[keys[i]]['number'];
			if (newNum < 5) {
				newNum = 5;
			}
			pointsObject[keys[i]]['length'] = newNum;
		}
	}

 	if ( pointsObject.JavaScript ) {
 		pointsObject.JavaScript['color'] = '#c25975';
 	}
 	if ( pointsObject.CSS ) {
 		pointsObject.CSS['color'] = '#3079AB';
 	}
 	if ( pointsObject.Design ) {
 		pointsObject.Design['color'] = '#e59a13';
 	}
 	if ( pointsObject['Development Tools'] ) {
 		pointsObject['Development Tools']['color'] = '#637a91';
 	}
 	if ( pointsObject['Digital Literacy'] ) {
 		pointsObject['Digital Literacy']['color'] = '#c38cd4';
 	}
 	if ( pointsObject.HTML ) {
 		pointsObject.HTML['color'] = '#39ADD1';
 	}
 	if ( pointsObject.Java ) {
 		pointsObject.Java['color'] = '#2c9676';
 	}
 	if ( pointsObject.PHP ) {
 		pointsObject.PHP['color'] = '#7D669E';
 	}
 	if ( pointsObject.Python ) {
 		pointsObject.Python['color'] = '#f092b0';
 	}
 	if ( pointsObject.Ruby ) {
 		pointsObject.Ruby['color'] = '#e15258';
 	}
 	if ( pointsObject.WordPress ) {
 		pointsObject.WordPress['color'] = '#838CC7';
 	}
 	if ( pointsObject.iOS ) {
 		pointsObject.iOS['color'] = '#53BBB4';
 	}
 	if ( pointsObject['Game Development'] ) {
 		pointsObject['Game Development']['color'] = '#20898c';
 	}
 	if ( pointsObject.Business ) {
 		pointsObject.Business['color'] = '#F9845B';
 	}
 	if ( pointsObject.Android ) {
 		pointsObject.Android['color'] = '#5cb860';
 	}

	return pointsObject;
};

module.exports = createObject;	
var romanNumeralUtils = require('../utils/RomanNumeralUtils.js');


function main(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    var write = 
    	'toSimpleRoman(9): ' + romanNumeralUtils.toSimpleRoman(9) + '<br/>' + 
    	'toSimpleRoman(12): ' + romanNumeralUtils.toSimpleRoman(12) + '<br/>' + 
    	'toSimpleRoman(1990): ' + romanNumeralUtils.toSimpleRoman(1990) + '<br/>' + 
    	'toSimpleRoman(140): ' + romanNumeralUtils.toSimpleRoman(140) + '<br/>' + 
    	'toSimpleRoman(2017): ' + romanNumeralUtils.toSimpleRoman(2017) + '<br/>';
    res.end(write);
    return res;
}

module.exports = {
	'main': main
};
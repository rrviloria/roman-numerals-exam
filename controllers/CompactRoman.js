var romanNumeralUtils = require('../utils/RomanNumeralUtils.js');


function main(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    var write = 
    	'toCompactRoman(9): ' + romanNumeralUtils.toCompactRoman(9) + '<br/>' + 
    	'toCompactRoman(12): ' + romanNumeralUtils.toCompactRoman(12) + '<br/>' + 
    	'toCompactRoman(1990): ' + romanNumeralUtils.toCompactRoman(1990) + '<br/>' + 
    	'toCompactRoman(140): ' + romanNumeralUtils.toCompactRoman(140) + '<br/>' + 
    	'toCompactRoman(2017): ' + romanNumeralUtils.toCompactRoman(2017) + '<br/>';
    res.end(write);
    return res;
}

module.exports = {
	'main': main
};
var romanNumeralUtils = require('../utils/RomanNumeralUtils.js');


function main(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    var write = 
        'toArabic(IX): ' + romanNumeralUtils.toArabic('IX') + '<br/>' + 
    	'toArabic(XII): ' + romanNumeralUtils.toArabic('XII') + '<br/>' + 
    	'toArabic(MCMXC): ' + romanNumeralUtils.toArabic('MCMXC') + '<br/>' + 
    	'toArabic(CXL): ' + romanNumeralUtils.toArabic('CXL') + '<br/>' + 
    	'toArabic(MMXVII): ' + romanNumeralUtils.toArabic('MMXVII') + '<br/>';
    res.end(write);
    return res;
}

module.exports = {
	'main': main
};
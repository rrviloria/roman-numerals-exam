var simpleSymbols = {
	'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1
};

var compactSymbols = {
	'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900
};

function toSimpleRoman(value) {
	var orderedKeys = Object.keys(simpleSymbols).sort(function(a,b){
		return simpleSymbols[a]-simpleSymbols[b]
	});
	return baseIntToRoman(simpleSymbols, orderedKeys, value);
}

function toCompactRoman(value) {
	var symbols = Object.assign({}, simpleSymbols);
	var symbols = Object.assign(symbols, compactSymbols);
	var orderedKeys = Object.keys(symbols).sort(function(a,b){
		return symbols[a]-symbols[b]
	});
	return baseIntToRoman(symbols, orderedKeys, value);

}

function baseIntToRoman(symbols, orderedKeys, value, romanStr='') {
	for(var i = orderedKeys.length - 1; i >= 0; i--) {
		key = orderedKeys[i];
		if(value >= symbols[key]) {
			romanStr += key;
			value -= symbols[key];
			break;
		}
	}
	if(value > 0) {
		romanStr = baseIntToRoman(symbols, orderedKeys, value, romanStr);
	}
	return romanStr;
}

function romanToString(romanStr) {
	var value = 0;
	while(romanStr.length > 0) {
		var first2Chars = romanStr.slice(0, 2);
		var sliceLength = 1;
		if(first2Chars in compactSymbols) {
			value += compactSymbols[first2Chars];
			sliceLength = 2;
		}
		else if(romanStr[0] in simpleSymbols) {
			value += simpleSymbols[romanStr[0]];
		}
		romanStr = romanStr.slice(sliceLength);
	}
	return value;
}


module.exports = {
	'toSimpleRoman': toSimpleRoman,
	'toCompactRoman': toCompactRoman,
	'toArabic': romanToString
};
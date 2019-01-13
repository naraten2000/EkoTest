'use strict';

var testString = 'foo(bar)blim';

var leftPosition = testString.indexOf('(');
var rightPosition = testString.indexOf(')');
var textInParentheses = testString.substr(leftPosition + 1, rightPosition - leftPosition - 1);

var newTextInParentheses = '';
for (var i = 0; i < textInParentheses.length; i++) {
    newTextInParentheses += textInParentheses[textInParentheses.length - i - 1];
}

var finalText = testString.substr(0, leftPosition - 1) + newTextInParentheses + testString.substr(rightPosition + 1);

console.log(finalText);


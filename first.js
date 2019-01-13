'use strict';

var array = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
array.sort();

var resultArray = [''];

array.forEach(element => {
    if (resultArray.indexOf(element) === -1) {

        var length = element.length;
        var resultArrayInternal = [];

        array.forEach(elementInternal => {
            if (elementInternal.length === length) {

                resultArray.push(elementInternal);

                var identicalFlag = true;

                for (var i = 0; i < element.length; i++) {
                    if (elementInternal.indexOf(element.charAt(i)) === -1) {
                        identicalFlag = false;
                        break;
                    }
                };

                if (identicalFlag)
                    resultArrayInternal.push(elementInternal);
            }
        });

        console.log(resultArrayInternal.join('-'))
    }
});


function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
}
setTimeout(function2, 11000);
'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    return !(num % 3) && !(num % 5) ? 'FizzBuzz' : !(num % 5) ? 'Buzz' : !(num % 3) ? 'Fizz' : num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    return n * (n > 1 ? getFactorial(n - 1) : 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    while (n1 <= n2) {
        sum += n1;
        n1++;
    }

    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    return a < b + c && b < a + c && c < a + b;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    return !(rect1.left+rect1.width < rect2.left || rect2.left+rect2.width < rect1.left || rect1.top+rect1.height < rect2.top || rect2.top+rect2.height < rect1.top);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    let res = Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2);
    return circle.radius > res;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i], i + 1) === -1 && i === 0) return str[i];
        if (str.indexOf(str[i], i + 1) === -1 && str.lastIndexOf(str[i], i - 1) === -1) return str[i];
    }

    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return (isStartIncluded ? '[' + min : '(' + min) + ', ' + max + (isEndIncluded ? ']' : ')');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    return +String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let res = String(ccn).split('').reverse().map((a, b) => b % 2 === 0 ? +a : a * 2);
    res = res.reduce((a, b, c)=> a + (c % 2 === 0 ? b : String(b).split('').reduce((q, w)=> q + +w, 0)), 0);
    return res % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let res = String(num).split('').reduce((a, b)=> a + +b, 0);
    while (res >= 10) {
        res = String(res).split('').reduce((a, b)=> a + +b, 0);
    }

    return res;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let m = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ']' || str[i] === '}' || str[i] === ')' || str[i] === '>') {
            let last = m[m.length - 1];
            if (str[i] === ']' && last === '[') m.pop();
            else if (str[i] === '}' && last === '{') m.pop();
            else if (str[i] === ')' && last === '(') m.pop();
            else if (str[i] === '>' && last === '<') m.pop();
            else return false;
        } else {
            m.push(str[i]);
        }
    }

    return !m.length;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let timeStamp = endDate - startDate;
    let days = parseInt(timeStamp / 86400000);
    timeStamp = timeStamp % 86400000;
    let hours = parseInt(timeStamp / 3600000);
    timeStamp = timeStamp % 3600000;
    let min = parseInt(timeStamp / 60000);
    timeStamp = timeStamp % 60000;
    let sec = timeStamp / 1000;

    if (days) {
        if (days >= 546) return `${Math.round(days / 365)} years ago`;
        else if (days > 345 && days <= 545) return 'a year ago';
        else if (days > 45 && days <= 345) return `${Math.round(days / 30)} months ago`;
        else if (days > 25 && days <= 45) return 'a month ago';
        else if (days >= 25 && sec) return 'a month ago';
        else if (days > 1 && days <= 25) return `${days} days ago`;
        else if (days >= 1 && sec) return `${days + 1} days ago`;
        else if (days === 1) return 'a day ago';
    }

    if (hours) {
        if (hours >= 22 && sec) return 'a day ago';
        else if (hours > 1 && hours <= 22 && !sec) return `${hours} hours ago`;
        else if (hours >= 1 && min >= 30 && sec) return `${hours + 1} hours ago`;
        else if (hours === 1) return 'an hour ago';
    }

    if (min) {
        if (min >= 45 && sec) return 'an hour ago';
        else if (min >= 2 && min <= 45) return `${min} minutes ago`;
        else if (min >= 1 && sec > 30) return `2 minutes ago`;
        else if (min < 2) return 'a minute ago';
    }

    if (sec) {
        if (sec > 45) return 'a minute ago';
        else if (sec <= 45) return 'a few seconds ago';
    }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let res = [];
    let check = pathes[0].split('/');

    for (let i = 0; i < check.length; i++) {
        let needAdd = false;
        for (let k = 1; k < pathes.length; k++) {
            if (pathes[k].indexOf(check[i]) !== -1 && pathes[k][pathes[k].indexOf(check[i]) + check[i].length] === '/') {
                needAdd = true;
            } else {
                needAdd = false;
            }
        }

        if (needAdd && !res.includes(check[i])) {
            res.push(check[i]);
        }
    }

    res = res.filter((a)=> a);

    if (!res.length) {
        let commonDir = false;
        pathes.forEach((a)=> {
            if (a[0] === '/') {
                commonDir = true;
            } else {
                commonDir = false;
            }
        });

        if (commonDir) return '/';
        else return '';
    }

    return '/' + res.join('/') + '/';
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let newArr = [];
    m1.forEach((q, w)=> {
        let v = [];
        for (let k = 0; k < m2[0].length; k++) {
            v.push(q.reduce((y, u, i)=> {
                return y + u * m2[i][k];
            }, 0));
        }

        newArr.push(v);
    });

    return newArr;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    if (position[0][0] === '0' && position[1][1] === '0' && position[2][2] === '0') return '0';
    else if (position[0][0] === 'X' && position[1][1] === 'X' && position[2][2] === 'X') return 'X';

    if (position[0][2] === '0' && position[1][1] === '0' && position[2][0] === '0') return '0';
    else if (position[0][2] === 'X' && position[1][1] === 'X' && position[2][0] === 'X') return 'X';
    
    for (let i = 0; i < position.length; i++) {
        let x = 0;
        let o = 0;

        for (let k = 0; k < position[i].length; k++) {
            if (position[i][k] === 'X') x++;
            else if (position[i][k] === '0') o++;
        }

        if (x === 3) {
            return 'X';
        }

        if (o === 3) {
            return '0';
        }
    }

    for (let i = 0; i < position.length; i++) {
        let x = 0;
        let o = 0;

        for (let k = 0; k < position[i].length; k++) {
            if (position[k][i] === 'X') x++;
            else if (position[k][i] === '0') o++;
        }

        if (x === 3) {
            return 'X';
        }

        if (o === 3) {
            return '0';
        }
    }

    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};

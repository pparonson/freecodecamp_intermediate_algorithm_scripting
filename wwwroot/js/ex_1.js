/*
 * Bonfire: Sum All Numbers in a Range
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * and all numbers between them.
 *
 * The lowest number will not always come first.
 */

 /*
  * Imperative answer
  */
 // function sumAll(arr) {
 //     let maxNum = null;
 //     let minNum = null;
 //     let sum = 0;
 //     for (var i = 0; i < arr.length - 1; i++) {
 //         // Get min number of array
 //         minNum = Math.min( arr[i], arr[i + 1]);
 //         maxNum = Math.max( arr[i], arr[i + 1]);
 //     }
 //     for (var j = ( minNum + 1 ); j < maxNum; j++) {
 //         // increment from min to max
 //         arr.push( j );
 //
 //     }
 //     for (var k = 0; k < arr.length; k++) {
 //         // return sum of all numbers in new arr
 //         sum += arr[k];
 //
 //     }
 //     return sum;
 // }
 // sumAll([1, 4]);

// /*
//  * Functional answer
//  */
const sumAll = (arr) => {
    // return sum of all numbers
    // Uses Math.min / Math.max to get range from array
    const getMinMax = mathFn => arr => mathFn( ...arr );

    const min = getMinMax( Math.min );
    const max = getMinMax( Math.max );

    // increment from min to max
    // Recursion to sum all nums in range of min to max
    // Returns the value of acc ( sum of num in range)
    const sumRange = (min, max, acc) => {
        if (min > max) {
            return acc;
        }
        return sumRange(min + 1, max, acc + min);
    };
    // return the result
    // return sumRange(min(arr), max(arr), 0); // comment out if using module

    Expose the function through a module
    const _sumRange = sumRange(min(arr), max(arr), 0);
    const module = {
        sumRange: _sumRange
    };
    return module;
};

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

/*
 * Functional answer
 */
 // Uses Math.min / Math.max to get range from array
 const getMinMax = ( mathFn, arr) => {
     return mathFn( ...arr );
 };
 // increment from min to max
 // Recursion to sum all nums in range of min to max
 const sumRange = (min, max, acc) => {
     if (min > max) {
         return acc;
     }
     return sumRange(min + 1, max, acc + min);
 };
 // return sum of all numbers
 const sumAll = (arr) => {
     const min = getMinMax(Math.min, arr);
     const max = getMinMax(Math.max, arr);
     return sumRange(min, max, 0);
 };

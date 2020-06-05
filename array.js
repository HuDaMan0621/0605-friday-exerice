//find the mean, median, and mode of the array:
//[4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8]
//mean: average of all the numbers
//median: number at exact middle of sorted array
//mode: the number that appears the most times


let arr = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8];

//mean: average of all the numbers
// var total = 0;
// for (let index = 0; index < arr.length; index++) {
//     total += arr[index];
// }    
//     var avg = total / arr.length;
//     console.log(`the is of the arr is ${avg}`);

//median: number at exact middle of sorted array

arr.sort();
console.log(arr);[ 1, 1, 14, 2, 2, 2, 27, 3, 4, 400, 7, 8, 9, 9 ]
var middle = arr[Math.round((arr.length - 1) / 2)];
console.log(`the number at exact middle of the sorted array is ${middle}`);

//mode: the number that appears the most times


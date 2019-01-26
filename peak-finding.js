/* PEAK FINDING: Given a 1D array, find *a* peak. A number at index i is a peak
iff i-1 <= i and i+1 <= i */


/* Binary search algorithm. Returns a peak and its index. Complexity is O(log(n)) */
function find1DPeak(arr) {
    let left = 0;
    let right = arr.length - 1;
    let index;

    while (left <= right) {
        index = left + Math.floor((right - left) / 2);
        
        if (index > 0 && arr[index - 1] > arr[index]) {
            right = index - 1;
        } else if (index < arr.length - 1 && arr[index + 1] > arr[index]) {
            left = index + 1;
        } else {
            return [arr[index], index];
        }
    }
}

// T(n) = O(1) + O(1) + T(n/4) ...
// T(n) iO(1) + T(n/2^i)
// T(1) = O(1)
// n/2^i = 1
// log(n/2^i) = 0
// log(n) - log(2^i) = 0
// log(n) - ilog(2) = 0
// log(n) = ilog(2)
// i = log_2(n)
// complexity: log(n)

// tests
const arr1 = [6, 9, 6, 8, 3, 0, 9, 1, 8];
const arr2 = [0, 1, 2, 3, 4, 5, 5, 2, 3];
const arr3 = [7, 2, 5, 0, 0, 6, 8, 6, 6];
const arr4 = [1, 5, 7, 2, 8, 0, 0, 2, 2, 6];
const arr5 = [8, 7, 9, 8, 8, 9, 0, 5, 2, 1];
const arr6 = [8, 7, 9, 8, 8, 9, 6, 5, 2, 1];
const arr7 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const arr8 = [7, 6, 5, 4, 3, 2, 1, 0];
const arr9 = [1];
const arr10 = [1, 2];
const arr11 = [1, 2, 3];
const arr12 = [9, 3, 3, 7, 8];

console.log("1D peak-finding tests:\n");
console.log("Expected 9, received " + find1DPeak(arr1)[0].toString());
console.log("Expected 5, received " + find1DPeak(arr2)[0].toString());
console.log("Expected 8, received " + find1DPeak(arr3)[0].toString());
console.log("Expected 8, received " + find1DPeak(arr4)[0].toString());
console.log("Expected 5, received " + find1DPeak(arr5)[0].toString());
console.log("Expected 9, received " + find1DPeak(arr6)[0].toString());
console.log("Expected 8, received " + find1DPeak(arr7)[0].toString());
console.log("Expected 7, received " + find1DPeak(arr8)[0].toString());
console.log("Expected 1, received " + find1DPeak(arr9)[0].toString());
console.log("Expected 2, received " + find1DPeak(arr10)[0].toString());
console.log("Expected 3, received " + find1DPeak(arr11)[0].toString());
console.log("Expected 8, received " + find1DPeak(arr12)[0].toString());
console.log("\n");


// 2D PEAK FINDING


/* Same principle as a binary search. We start with the middle row and find the 1D peak of that row.
We then look one cell above. If it's bigger we repeat the process on the top half of the array. If not,
we look at the lower cell. If that's bigger, we repeat for the bottom half of the array. If neither
is true, we've found our 2D peak. 

Complexity is O(log(n)log(m)), where n and m are the dimensions
of the array */
function find2DPeak(arr) {
    let top = 0;
    let bottom = arr.length - 1;
    let i;
    let j;

    while (top <= bottom) {
        i = top + Math.floor((bottom - top) / 2);
        j = find1DPeak(arr[i])[1]; // get index of local peak in the row

        if (i > 0 && arr[i - 1][j] > arr[i][j]) {
            bottom = i - 1;
        } else if (i < arr.length - 1 && arr[i + 1][j] > arr[i][j]) {
            top = i + 1;
        } else {
            return arr[i][j];
        }
    }
}

// T(n, m) = O(1) + O(log(m)) + T(n/2, m)
// T(n, m) = iO(log(m)) + T(n/2^i, m)
// T(1, m) = O(log(m))
// i = log(n)
// T(n, m) = log(n)O(log(m)) + O(log(m))
// Comlexity: O(log(n)log(m))


// tests

const twoDArr1 = [
    [0, 7, 7], 
    [6, 8, 5], 
    [3, 3, 0]
];
const twoDArr2 = [
    [0, 1, 2], 
    [2, 0, 3]
];
const twoDArr3 = [
    [1, 5, 1]
];
const twoDArr4 = [
    [3, 2, 1]
];
const twoDArr5 = [
    [8, 9, 6],
    [7, 6, 1],
    [0, 2, 8]
]
const twoDArr6 = [
    [2, 8, 4, 9, 8],
    [9, 3, 3, 7, 8],
    [1, 5, 0, 6, 6],
    [2, 10, 8, 8, 0],
    [1, 2, 2, 9, 1]
]

console.log("2D peak finding tests:\n");
console.log("Expected 8, received " + find2DPeak(twoDArr1).toString());
console.log("Expected 2, received " + find2DPeak(twoDArr2).toString());
console.log("Expected 5, received " + find2DPeak(twoDArr3).toString());
console.log("Expected 3, received " + find2DPeak(twoDArr4).toString());
console.log("Expected 9, received " + find2DPeak(twoDArr5).toString());
console.log("Expected 10, received " + find2DPeak(twoDArr6).toString());


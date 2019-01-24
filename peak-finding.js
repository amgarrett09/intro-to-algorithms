/* PEAK FINDING: Given a 1D array, find *a* peak. A number at index i is a peak
iff i-1 <= i and i+1 <= i */

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

/* Binary search algorithm. Complexity is O(log(n)) */
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
            return arr[index];
        }
    }
}

// tests
console.log("Expected 9, received " + find1DPeak(arr1).toString());
console.log("Expected 5, received " + find1DPeak(arr2).toString());
console.log("Expected 8, received " + find1DPeak(arr3).toString());
console.log("Expected 8, received " + find1DPeak(arr4).toString());
console.log("Expected 5, received " + find1DPeak(arr5).toString());
console.log("Expected 9, received " + find1DPeak(arr6).toString());
console.log("Expected 8, received " + find1DPeak(arr7).toString());
console.log("Expected 7, received " + find1DPeak(arr8).toString());
console.log("Expected 1, received " + find1DPeak(arr9).toString());
console.log("Expected 2, received " + find1DPeak(arr10).toString());
console.log("Expected 3, received " + find1DPeak(arr11).toString());

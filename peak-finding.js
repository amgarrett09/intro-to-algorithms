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

// T(n) = O(1) + T(n/2)
// T(n) = O(1) + O(1) + T(n/4) ...
// T(n) = iO(1) + T(n/2^i)
// T(1) = O(1)
// n/2^i = 1
// log(n/2^i) = 0
// log(n) - log(2^i) = 0
// log(n) - ilog(2) = 0
// log(n) = ilog(2)
// i = log(n)
// T(n) = log(n)O(1) + O(1)
// asymptotic complexity: O(log(n))


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
// asymptotic comlexity: O(log(n)log(m))
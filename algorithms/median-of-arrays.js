/* find the median of two sorted arrays of the same length 
e.g., arr1 = [1,3,5], arr2 = [2,4,6], median = 3.5 */

// first pass, linear time
function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const merged = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      merged.push(arr1[p1]);
      p1 += 1;
    } else {
      merged.push(arr2[p2]);
      p2 += 1;
    }
  }

  while (p1 < arr1.length) {
    merged.push(arr1[p1]);
    p1 += 1;
  }

  while (p2 < arr2.length) {
    merged.push(arr2[p2]);
    p2 += 1;
  }

  return merged;
}

function findMedian(arr1, arr2) {
  const merged = merge(arr1, arr2);

  const middle = (merged.length - 1) / 2;

  if (Math.floor(middle) !== middle) {
    const index1 = Math.floor(middle);
    const index2 = index1 + 1;

    return (merged[index1] + merged[index2]) / 2;
  }

  return merged[middle];
}

/* A logarithmic time version is possible if the two arrays have
the same size. We can take the median of each array. If the first
median is higher, we know the middle points must be in the first half
of the first array, and/or the second half of the second array.

We can keep breaking the arrays down like this recursively until
we reach the base case where there are two elements in each sub-array, where
the median can be easily calculated. 

In order for subarrays to work (which avoid creating new arrays each time),
the median function must take typed arrays.
*/

function median(arr1, arr2) {
  if (arr1.length === 1) {
    return (arr1[0] + arr2[0]) / 2.0;
  }
  if (arr1.length === 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  const median1 = calcMedian(arr1);
  const median2 = calcMedian(arr2);

  if (median1 === median2) return median1;
  if (median2 > median1) {
    const sub1 = arr1.subarray(0, Math.floor(arr1.length / 2 + 1));
    const sub2 = arr2.subarray(Math.floor((arr2.length - 1) / 2), arr2.length);

    return median(sub1, sub2);
  }

  const sub3 = arr1.subarray(Math.floor((arr1.length - 1) / 2), arr1.length);
  const sub4 = arr2.subarray(0, Math.floor(arr2.length / 2 + 1));

  return median(sub3, sub4);
}

function calcMedian(arr) {
  const middle = (arr.length - 1) / 2;

  if (Math.floor(middle !== middle)) {
    const i = Math.floor(middle);
    const j = i + 1;

    return (arr[i] + arr[j]) / 2;
  }

  return arr[middle];
}

module.exports = {
  merge,
  findMedian,
  median,
  calcMedian
};

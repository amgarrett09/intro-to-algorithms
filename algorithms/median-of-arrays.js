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

module.exports = {
  merge,
  findMedian
};

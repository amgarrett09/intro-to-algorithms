const { findMedian, merge } = require("../algorithms/median-of-arrays");

describe("findMedian", () => {
  it("should produce the correct result", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];

    expect(findMedian(arr1, arr2)).toBe(3.5);
  });
});

describe("merge", () => {
  it("should produce a merged array from two sorted arrays", () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];

    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

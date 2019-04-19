const {
  findMedian,
  merge,
  calcMedian,
  median
} = require("../algorithms/median-of-arrays");

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

describe("calcMedian", () => {
  it("should produce the correct result", () => {
    const arr = Uint8Array.from([1, 3, 5]);

    expect(calcMedian(arr)).toBe(3);
  });
});

describe("median", () => {
  it("should produce the correct result", () => {
    const arr1 = Uint8Array.from([1]);
    const arr2 = Uint8Array.from([2]);

    expect(median(arr1, arr2)).toEqual(1.5);

    const arr3 = Uint8Array.from([1, 3]);
    const arr4 = Uint8Array.from([2, 4]);

    expect(median(arr3, arr4)).toBe(2.5);

    const arr5 = Uint8Array.from([1, 3, 5]);
    const arr6 = Uint8Array.from([2, 4, 6]);

    expect(median(arr5, arr6)).toBe(3.5);
  });
});

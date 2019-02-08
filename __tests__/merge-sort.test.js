const { mergeSort } = require("../algorithms/merge-sort.js");

test("merge sort with a number of arrays", () => {
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(mergeSort([4, 7, 9, 2, 3, 5, 6, 1, 5])).toEqual([
        1,
        2,
        3,
        4,
        5,
        5,
        6,
        7,
        9
    ]);
});

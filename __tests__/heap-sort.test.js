const {
    maxHeapify,
    buildMaxHeap,
    heapSort
} = require("../algorithms/heap-sort.js");

test("maxHeapify", () => {
    let arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

    maxHeapify(arr, 2);

    expect(arr).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
});

test("buildMaxHeap", () => {
    let arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

    buildMaxHeap(arr);

    expect(arr).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
});

test("heapSort", () => {
    expect(heapSort([2, 5, 4, 3, 1])).toEqual([5, 4, 3, 2, 1]);
});

const pf = require("../algorithms/peak-finding.js");

test("test 1D peak finding with host of values", () => {
    expect(pf.find1DPeak([6, 9, 6, 8, 3, 0, 9, 1, 8])).toEqual([9, 1]);
    expect(pf.find1DPeak([1, 5, 7, 2, 8, 0, 0, 2, 2, 6])).toEqual([8, 4]);
    expect(pf.find1DPeak([1])).toEqual([1, 0]);
    expect(pf.find1DPeak([1, 2, 3])).toEqual([3, 2]);
    expect(pf.find1DPeak([9, 3, 3, 7, 8])).toEqual([8, 4]);
});

test("test 2D peak finding with host of values", () => {
    expect(pf.find2DPeak([[0, 7, 7], [6, 8, 5], [3, 3, 0]])).toEqual(8);
    expect(pf.find2DPeak([[0, 1, 2], [2, 0, 3]])).toEqual(2);
    expect(pf.find2DPeak([[3, 2, 1]])).toEqual(3);
    expect(
        pf.find2DPeak([
            [2, 8, 4, 9, 8],
            [9, 3, 3, 7, 8],
            [1, 5, 0, 6, 6],
            [2, 10, 8, 8, 0],
            [1, 2, 2, 9, 1]
        ])
    ).toEqual(10);
});

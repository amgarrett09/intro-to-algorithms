const dd = require("../algorithms/document-distance1.js");

test("test getWordList", () => {
    expect(dd.getWordList("Hello, I am a programmer")).toEqual([
        "hello",
        "i",
        "am",
        "a",
        "programmer"
    ]);
    expect(
        dd.getWordList("And i said, 'It is quite nice to own a cat.'")
    ).toEqual([
        "and",
        "i",
        "said",
        "it",
        "is",
        "quite",
        "nice",
        "to",
        "own",
        "a",
        "cat"
    ]);
    expect(dd.getWordList("Hello             world!!!")).toEqual([
        "hello",
        "world"
    ]);
});

test("test vectorizeWords", () => {
    expect(dd.vectorizeWords(["the", "cat", "ate", "the", "mouse"])).toEqual({
        the: 2,
        cat: 1,
        ate: 1,
        mouse: 1
    });

    expect(
        dd.vectorizeWords(["im", "im", "a", "programmer", "programmer", "hi"])
    ).toEqual({ im: 2, a: 1, programmer: 2, hi: 1 });
});

test("test computeAngle", () => {
    expect(dd.computeAngle({test: 1, object: 2}, {test: 2, object: 3, hi: 1})).toBe(0.2971225163471023);
})
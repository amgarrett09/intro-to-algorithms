const dd = require("../document-distance1.js");

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

const alphaNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
    ""
);

// Complexity: O(L) where L is string length
function getWordList(st) {
    let output = [];
    let chars = [];

    for (let i = 0; i < st.length; i++) {
        if (alphaNums.includes(st[i])) {
            chars.push(st[i]);
        } else if (chars.length > 0) {
            output.push(chars.join("").toLowerCase());
            chars = [];
        }
    }

    if (chars.length > 0) {
        output.push(chars.join("").toLowerCase());
    }

    return output;
}

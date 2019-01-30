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

// Complexity: O(W) where W is number of words in the list
function vectorizeWords(list) {
    output = {};

    list.forEach(word => {
        if (word in output) {
            output[word] += 1;
        } else {
            output[word] = 1;
        }
    });

    return output;
}

// Complexity: O(L1 + L2) where L1 and L2 are the lengths of the two vectors respectively
function computeAngle(v1, v2) {
    const numerator = dotProduct(v1, v2);
    const denominator = Math.sqrt(dotProduct(v1, v1) * dotProduct(v2, v2));

    return Math.acos(numerator / denominator);

    function dotProduct(v1, v2) {
        sum = 0;
        for (let c in v1) {
            if (c in v2) {
                sum += v1[c] * v2[c];
            }
        }

        return sum;
    }
}

module.exports = { getWordList, vectorizeWords, computeAngle };

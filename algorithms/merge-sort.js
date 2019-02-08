/* Merge sort is usually defined recursively, which makes it a lot easier to
think about. The disadvantage is that in languages like JavaScript 
(which don't support tail recursion elimination) you can end up with a 
stack overflow if there's too much recursion. 

Further, vanilla JavaScript does not allow slicing arrays without creating a
new array, so the performance and space use may be worse than in other
languages.
*/

function mergeSort(input) {
    let n = input.length;

    if (n === 1) {
        return input;
    }

    const middle = Math.floor(n / 2);
    const left = mergeSort(input.slice(0, middle));
    const right = mergeSort(input.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let i = 0;
    let j = 0;

    const output = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            output.push(left[i]);
            i++;
        } else {
            output.push(right[j]);
            j++;
        }
    }

    if (i < left.length) {
        output.push(...left.slice(i));
    }

    if (j < right.length) {
        output.push(...right.slice(j));
    }

    return output;
}

module.exports = { mergeSort };

/* Ideally, merge sort has a complexity of O(nlog(n)). The recurrence relation
can be written like this: T(n) = 0(1) + 2T(n/2) + 0(n). The constant at the
front represents splitting the array, which in most language would just be
done with pointers to elements of the original array. The second part
representes the fact that once we split the array in two, we now have
two sorting problems with n/2 elements. And the 0(n) part at the end
corresponse to the merge step.

If we solve this recurrence, we end up with n work being done log(n) times,
or O(nlog(n)).
*/

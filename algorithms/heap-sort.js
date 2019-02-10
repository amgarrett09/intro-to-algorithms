/* A heap is an array visualized as a nearly-complete binary tree.
If the root of the tree is index i, then the left child is at index 2i,
and the right child is at index 2i + 1

Arrays are of course indexed from zero, and I'm setting things up so the
first node of the heap is at index zero. All we need to do to find node n
of the heap is to subtract 1 from n to get the actual index.

A max heap is a heap where the two children of a node are always <= the parent.*/

/* Takes an array and a node n. If the element at that node violates the max
heap property, correct it by moving the element down the tree until it's fixed.
The algorithm assumes that the left child of i and the right child of i are themselves
roots of max heaps. Complexity is O(log(n))*/
function maxHeapify(arr, n) {
    let root = n - 1;
    let left = n * 2 - 1;
    let right = left + 1;
    const heapSize = arr.length;
    let largest;

    while (true) {
        // If left child is bigger than root, then largest is the left child
        if (left < heapSize && arr[left] > arr[root]) {
            largest = left;
        } else {
            largest = root;
        }

        // If right child is bigger than current largest, then largest is right child
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }

        /* If the largest element is not the root, swap the values of the 
        root and largest elements, and repeat the process at the index where
        the largest element was */
        if (largest !== root) {
            [arr[largest], arr[root]] = [arr[root], arr[largest]];

            // set up next iteration
            let n = largest + 1
            root = n - 1;
            left = 2*n - 1;
            right = left + 1;
        } else {
            // If largest is the root, then we're done
            break;
        }
    }
}

/* Takes an array and turns it into a max heap. We can start at node n/2 and
work backwards, because anything after node n/2 is a leaf, which are by
definition already max heaps.

The naive answer for the complexity here would be 0(nlog(n)), since it seems
like we do log(n) work (from maxHeapify) n/2 times. However each time we do
maxHeapify, the number of swaps we need to do at the next level decreases, 
and some careful counting reveals that this algorithm has an actual
complexity of O(n).*/
function buildMaxHeap(arr) {
    const start = Math.floor((arr.length) / 2);

    for (let i = start; i >= 1; i--) {
        maxHeapify(arr, i);
    }
}

/* Returns an array sorted from greatest to smallest. Time complexity is 
O(nlog(n)).*/
function heapSort(arr) {
    const output = [];

    buildMaxHeap(arr);

    while (arr.length > 0) {
        // swap first and last node
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

        // pop last node (which is now max element) and push to output
        output.push(arr.pop());

        // fix max heap property for root if necessary
        maxHeapify(arr, 1);
    }

    return output;
}

module.exports = { maxHeapify, buildMaxHeap, heapSort };

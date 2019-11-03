/**
 * Bubble sort is based on the idea of repeatedly comparing
 * pairs of adjacent elements and then swapping their positions
 * if they exist in the wrong order.
 * Complexity:
 * The complexity of bubble sort is o(n^2)  in both worst and average cases,
 * because the entire array needs to be iterated for every element.
 */

const unsortedArr = [4, 1, 8, 7, 6];

const bubbleSort = (arr = []) => {
  const length = arr.length;
  let temp;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
bubbleSort(unsortedArr);
console.log(unsortedArr);

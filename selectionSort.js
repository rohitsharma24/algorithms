/**
 *The Selection sort algorithm is based on the idea of
 * finding the minimum or maximum element in an unsorted
 * array and then putting it in its correct position in
 * a sorted array.
 * Complexity:
 * To find the minimum element from the array of N elements,
 * N-1 comparisons are required.
 * After putting the minimum element in its proper position,
 * the size of an unsorted array reduces to N-1 and then N-2
 * comparisons are required to find the minimum in the unsorted array.
 *
 * Therefore (N-1) + (N-2) + ... + 1 = (N.(N-1))/2 comparisons and N swaps
 * result in the overall complexity of O(N^2).
 */
const unsortedArr = [4, 1, 8, 7, 6];

const selectionSort = (arr = []) => {
  const length = arr.length;
  let temp, minimum;
  for (let i = 0; i < length - 1; i++) {
    minimum = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[minimum] > arr[j]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      temp = arr[minimum];
      arr[minimum] = arr[i];
      arr[i] = temp;
    }
  }
};
selectionSort(unsortedArr);
console.log(unsortedArr);

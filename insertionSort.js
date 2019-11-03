/**
 * In worst case,each element is compared with all the other elements
 * in the sorted array. For N elements, there will be N^2 comparisons.
 * Therefore, the time complexity is O(N^2)
 */
const unsortedArr = [4, 1, 8, 7, 6];

const insertionSort = (arr = []) => {
  const length = arr.length;
  let temp;
  for (let i = 0; i < length; i++) {
    temp = arr[i];
    for (var j = i; j > 0; j--) {
      if (temp < arr[j - 1]) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    arr[j] = temp;
  }
};
insertionSort(unsortedArr);
console.log(unsortedArr);

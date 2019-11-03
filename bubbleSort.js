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

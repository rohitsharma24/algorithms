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

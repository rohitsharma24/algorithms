const unsortedArray = [10, -1, 2, 5, 0, 6, 4, -5];

// compare elements and merge them
const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  resultArray = [
    ...resultArray,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex)
  ];
  return resultArray;
};

// splitting array until one element is there in the list;
const mergeSort = unsortedArray => {
  if (unsortedArray.length === 1) {
    return unsortedArray;
  }
  const mid = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, mid);
  const right = unsortedArray.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(unsortedArray));

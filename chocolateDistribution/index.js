const a = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const m = 7;

const init = (arr, m) => {
  if (arr.length < m) {
    return -1;
  }
  arr.sort((x, y) => x - y);
  let min = arr[arr.length - 1];
  for (let i = 0, j = m - 1; j < arr.length; i++, j++) {
    var diff = Math.abs(arr[i] - arr[j]);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
};
console.log(init(a, m));

function sumAll(arr) {
  let smaller = arr[0] < arr[1] ? arr[0] : arr[1];
  let greater = arr[0] > arr[1] ? arr[0] : arr[1];

  let sum = 0;
  for (let i = smaller; i <= greater; i++) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};

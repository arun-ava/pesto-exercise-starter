function sumFibs(n) {

  let a = 0, b = 1, c = 1, sum = 0;
  while (c <= n) {
    if (c % 2 == 1) {
      sum += c;
    }
    c = a + b;
    a = b;
    b = c;

  }

  return sum;
}

export {
  sumFibs,
};

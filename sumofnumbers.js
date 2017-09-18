function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}
function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}

const testData = [1, 2, 3, 4, 5];

console.log(sumFor(testData));
console.log(sumWhile(testData));
console.log(sumRecursion(testData));
console.log(sumTheSimpleWay(testData));
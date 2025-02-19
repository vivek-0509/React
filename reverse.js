const reverse = function (arr) {
  const rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
};

const num = [1, 2, 3, 4, 5];
console.log(reverse(num));

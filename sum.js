const sum = function (arr) {
  const ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  ans.push(sum);
  return ans;
};

const num = [1, 2, 3, 4, 5];
console.log(sum(num));

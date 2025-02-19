const maximum = function (arr) {
  const max = [];
  let maxi = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxi < arr[i]) {
      maxi = arr[i];
    }
  }

  max.push(maxi);
  return max;
};

const nums = [1, 2, 3, 4, 5, 6];
console.log(maximum(nums));

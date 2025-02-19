const removeDublicates = function (arr) {
  const uniques = [];
  for (let i = 0; i < arr.length; i++) {
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        c++;
      }
    }
    if (c == 0) {
      uniques.push(arr[i]);
    }
  }
  return uniques;
};

const nums = [1, 1, 2, 3, 3, 4, 5, 6, 6];
console.log(removeDublicates(nums));

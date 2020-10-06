class MathOps {
  constructor(name) {
    this.name = name;
  }
  maxNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max) {
        max = arr[i];
      }
    }
    return max;
  }
  avNumber(arr) {
    let sum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    let average = sum / arrLength;
    return average;
  }
  reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  countNums(num) {

    if (num === undefined) {
      return 'Bad Request';
    } else {
      let numString = num.toString();
      return numString.length;
    }
  }

}
let ops = new MathOps('nvm');
// console.log('Max number: ', ops.maxNumber([3, 7, 9, 1, 4, 6]));
// console.log('Average number: ', ops.avNumber([3, 7, 9, 1, 4, 6]));
// console.log('Reversed array: ', ops.reverseArray([3, 7, 9, 1, 4, 6]));
console.log(ops.countNums());
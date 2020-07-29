function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
    swapped = false;
    for(let i = 0; i < array.length - 1; i++){
        if (array[i] > array[i + 1]) {
            swap(array, i, i+1);
            swapped = true;
        }
    }
    }
    return array;
  // n := length(array)
  // repeat
  //  swapped = false
  //  for i := 1 to n - 1 inclusive do
  //
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  //
  //     end if
  //   end for
  // until not swapped
}
// function bubbleSort(nums) {
//     let temp;
//     for (let i = nums.length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 temp = nums[j];
//                 nums[j] = nums[j + 1];
//                 nums[j + 1] = temp;
//             }
//         }
//     }
//     return nums;
// }
let array = [2, -1, 4, 3, 7, 3];
console.log(bubbleSort(array));


module.exports = {
  bubbleSort,
  swap
};

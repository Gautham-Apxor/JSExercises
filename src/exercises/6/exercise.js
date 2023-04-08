// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  const validate = inputArray instanceof Array; // Array.isArray(inputArray) is another way to validate the input
  let lengthOfArray = inputArray.length;
  if (validate) {
    console.log(`Length of the given input array is ${lengthOfArray}`);
  }
  else {
    console.log("Please enter an array");
  }
}
module.exports = findTheLength;
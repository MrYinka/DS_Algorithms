/**
 *
 A subsequence of an array is a set of numbers that aren't necessarily adjacent
 in the array but that are in the same order as they appear in the array. For
 instance, the numbers
 */


/**
 *
 A subsequence of an array is a set of numbers that aren't necessarily adjacent
 in the array but that are in the same order as they appear in the array. For
 instance, the numbers [1, 3, 4] form a subsequence of the array
 [1, 2, 3, 4], and so do the numbers [2, 4].

 Note that a single number in an array and the array itself are both valid
 subsequences of the array.

 */

const validSubsequence = (array, subsequence) => {

  let arrIdx = 0;
  let subSeqIdx = 0;

  while(arrIdx < array.length && subSeqIdx < subsequence.length){
      if(subsequence[subSeqIdx] == array[arrIdx]){
          subSeqIdx++;
      }
      arrIdx++;
  }

  return subSeqIdx == subsequence.length;

}


console.log("Valid Subsequence: ", validSubsequence([1, 2, 3, 4], [2,4]));
/**
 Write a function that takes in a non-empty array of integers that are sorted
 in ascending order and returns a new array of the same length with the squares
 of the original integers also sorted in ascending order.
 */

//O(nlogn) Time complexity o(n) space complexity
let sortedSquare = [];

const sortedSqr = (array) => {

    for(let element of array){
        sortedSquare.push(element * element);
    }

   return sortedSquare.sort((a,b) => {
        return a-b;
    });
}


console.log("Array:", sortedSqr([-3,-2,-1,0,4,5,6]));



// O(n) Time | O(n) Space


const sortedSquaredArray = (array) => {
    const sortedSquare = new Array(array.length).fill(0);
    let smallValueIndex = 0;
    let largeValueIndex = array.length - 1;

    for(let i = array.length-1; i >= 0; i--){

        let smallValue = array[smallValueIndex];
        let largeValue = array[largeValueIndex];

        if(Math.abs(smallValue) > Math.abs(largeValue)){
            sortedSquare[i] = smallValue * smallValue;
            smallValueIndex++;
        }else {
            sortedSquare[i] = largeValue * largeValue;
            largeValueIndex--;
        }
    }

    return sortedSquare;
}

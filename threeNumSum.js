//O(N^2) Time Complexity | O(N) Space Complexity

const threeNumSum = (array, targetSum) => {
    array.sort((a,b) => a - b);
    let triplets = [];

    for(let i = 0; i<array.length -2; i++){
        let leftIdx = i+1;
        let rightIdx = array.length - 1;

        while(leftIdx < rightIdx){
            let currentSum = array[i] + array[leftIdx] + array[rightIdx];
            if(currentSum == targetSum){
                triplets.push([array[i], array[leftIdx], array[rightIdx]])
                leftIdx++;
                rightIdx--;
            }
            if(currentSum < targetSum){
                leftIdx++;
            }else if(currentSum > targetSum){
                rightIdx--;
            }
        }
    }

    return triplets;
}





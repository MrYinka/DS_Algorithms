//0(n) Space, Time Complexity.

const twoSums = (array, targetSum) => {
    let hashmap = {};

    for(let element of array){
        if(hashmap[element] !== undefined){
            return [hashmap[element], element];
        }else{
            hashmap[targetSum - element] = element;
        }

    }

    return [];

}

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10));

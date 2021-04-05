//o(n) space, time complexity
//Returning the array elements
const twoSums = (array, target) => {
    let storageObject = {};

    for(let element of array){
        if(storageObject[element] !== undefined){
            return [storageObject[element], element];
        } else{
            storageObject[target - element] = element;
            console.log(storageObject);
        }
    }

    return [];
};

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10));

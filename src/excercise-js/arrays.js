function mergeArrays(arrays) {

    let finalArray = [];


    for (let i = 0; i < arrays.length; i++) {

        const valueArrays = arrays[i];

        for (let j = 0; j < valueArrays.length; j++) {

            finalArray.push(valueArrays[j])


        }

    }

    return finalArray;

}

console.log(mergeArrays([[1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]))
function sumCheck(numbers, total) {

    for (let i = 0; i < numbers.length - 1; i++) {

        let currentNumberI = numbers[i];

        for (let j = i + 1; j <= numbers.length - 1; j++) {
            let currentNumberJ = numbers[j];

            if (currentNumberI + currentNumberJ === total) {
                console.log(`${currentNumberI} + ${currentNumberJ} is equal to ${total}`)
            }

        }

    }
}

sumCheck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)
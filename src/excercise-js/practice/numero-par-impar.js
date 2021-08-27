function evenOdd(number) {

    let remaningNumber = number % 2

    console.log(remaningNumber)

    if (remaningNumber === 0) {
        console.log(`${number} is a even number`)
    } else {
        console.log(`${number} is a odd number`)
    }

}

evenOdd(6)
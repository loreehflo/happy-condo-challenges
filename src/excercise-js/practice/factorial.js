function factorialCheck(number) {

    let totalNumber = 1;

    for (let i = number; i > 0; i--) {

        console.log(i)

        totalNumber = totalNumber * i

    }

    return totalNumber;
}

console.log(factorialCheck(5));
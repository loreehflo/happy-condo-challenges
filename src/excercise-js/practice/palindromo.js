function palindromeCheck(number) {

    let reverseNumber = '';

    for (let i = number.length - 1; i >= 0; i--) {

        reverseNumber = reverseNumber + number[i];

    }

    if (reverseNumber === number) {
        console.log('this is a palindrome number')
    } else {
        console.log('this is not a palindrome number')
    }

    return reverseNumber;

}

console.log(palindromeCheck('121'));
function capital_indexes(text) {

    for (let i = 0; i < text.length; i++) {

        const capitalLetter = text[i];

        if (capitalLetter === capitalLetter.toString().toUpperCase()) {
            return `the first capital letter is: ${capitalLetter} and the position is: ${i}`;
        }

    }

}

console.log(capital_indexes("HeLlO"));
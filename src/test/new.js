
let test = "hola";

// hola
// aolh
// aloh

//hola 
//h 
//aola

// Douniversity
// ytisrevinuod

function reverse(str) {

}


function test1(worldCheck) {

    let currentLetter = ''
    halfIndex = Math.floor(worldCheck.length / 2) - 1
    for (let i = 0; i <= halfIndex; i++) {

        currentLetter = worldCheck[i]
        worldCheck[i] = worldCheck[worldCheck.length - i - 1]
        worldCheck[worldCheck.length - i - 1] = currentLetter

    }

    return worldCheck

}


console.log(test1(test))
console.log(test)
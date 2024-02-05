// const disha = 56
// const salamn = 95 

// if(disha > salamn) {
//     console.log('Disha get the top of the list')
// } else {
//     console.log('salamn eat the stobery')
// }

function whoGetTopMark (a, b) {
    if(a > b) {
        return a
    } else {
        return b
    }
}
// console.log(whoGetTopMark(100, 102))
const height = [65, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,]

function getTheTopMark(numbers) {
    let max = numbers[0]
    for ( const num of numbers) {
        if ( num > max  ) {
            max = num
        }
       
    }
    return max
}
// console.log(getTheTopMark(height))
// get the min number of numbers

function getTheMin (numbers) {
    let min = numbers[0]
    for ( const num of numbers){
        if (num < min){
            num = min
        }
    }
    return min
}
console.log(getTheMin(height))
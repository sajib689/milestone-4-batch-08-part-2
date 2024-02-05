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
// console.log(getTheMin(height))
function woodQuantity(chair, table, bed){
    const chairs = chair * 3
    const tables = table * 10
    const beds = bed * 50
    const totalWood = chairs + tables + beds
    return totalWood
}

// console.log(woodQuantity(1,1,1))
const prices = [2000, 40000, 740000, 400, 5400]

function topRatedPhones (prices) {
    let max = prices[0]
    for (const price of prices) {
        if( price > max) {
            max = price
        }
    }
    return max
}
// console.log(topRatedPhones(prices))
const mobiles = [
    {
        name: 'samsung',
        price: 20000,
        camera: '12mp',
        color: 'black'
    },
    {
        name: 'vivo',
        price: 24000,
        camera: '12mp',
        color: 'black'
    },
    {
        name: 'oppo',
        price: 12000,
        camera: '12mp',
        color: 'black'
    },
    {
        name: 'walton',
        price: 4000,
        camera: '12mp',
        color: 'black'
    },
    {
        name: 'iphone',
        price: 34000,
        camera: '12mp',
        color: 'black'
    },
    {
        name: 'infinix',
        price: 17000,
        camera: '12mp',
        color: 'black'
    },
]


function getTheBestPhones (phones) {
    let min = phones[0]
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}
// console.log(getTheBestPhones(mobiles))
const products = [
    {
        name: 'shampo',
        price: 200,
    },
    {
        name: 'cironi',
        price: 400,
    },
    {
        name: 'shirt',
        price: 700,
    },
    {
        name: 'pant',
        price: 750,
    },
]

function getTotal (products) {
    let sum = 0
    for (const product of products) {
        sum = sum + product.price
    }
    return sum
}
// console.log(getTotal(products));

const productCarts = [
    {
        name: 'shampo',
        price: 200,
        quantity: 9,
    },
    {
        name: 'cironi',
        price: 400,
        quantity: 7,
    },
    {
        name: 'shirt',
        price: 700,
        quantity: 2,
    },
    {
        name: 'pant',
        price: 750,
        quantity: 4,
    },
]

function shoppingCart (products) {
    let sum = 0
    for (const product of products) {
       const cost = product.price * product.quantity
       sum += cost
    }
    return sum
}
// console.log(shoppingCart(productCarts))

function discountCalculator(totalPrice) {
    if (totalPrice <= 100) {
       const total = totalPrice * 100
        return total
    } else if (totalPrice <= 200) {
        const total = totalPrice * 90
        return total
    } else {
        const total = totalPrice * 70
        return total
    }
    
}

console.log(discountCalculator(200))
let findPrime = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let newNumber = numbers[i]
        let sayac = 0
        for (let j = 2; j < newNumber; j++) {
            if (newNumber % j == 0) {
                sayac++
            }
        }
        if (newNumber == 2) {
            console.log(newNumber + " bir asal sayı değildir'")
        }
        else if (sayac == 0) {
            console.log(newNumber + " bir asal sayıdır'")
        }
        else {
            console.log(newNumber + " bir asal sayı değildir'")
        }
    }
}
findPrime(2, 5, 8, 21, 13)
console.log("*********************")

let findFriend = (num1, num2) => {
    let sumNum1 = 0, sumNum2 = 0
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            sumNum1 += i
        }
    }
    for (let i = 1; i < num2; i++) {
        if (num2 % i == 0) {
            sumNum2 += i
        }
    }

    if (sumNum1 == num2 && sumNum2 == num1) {
        console.log(num1 + " ve " + num2 + " arkadaş sayılardır")
    }
    else {
        console.log(num1 + " ve " + num2 + " arkadaş sayı ddeğillerdir!")
    }
}

findFriend(220, 284)

console.log("*********************")

let findPerfectNumber = param => {

    for (let j = 1; j < param; j++) {
        let number = j
        let toplam = 0
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                toplam += i
            }
        }
        if (toplam == number) {
            console.log(number + " mükemmel sayıdır!")
        }
    }
}
findPerfectNumber(1000)

console.log("*********************")


let allNumbers = () => {
    for (let i = 0; i < 1000; i++) {
        let num = i
        let sayac = 0
        for (let j = 2; j < num; j++) {
            if (num % j == 0) {
                sayac++
            }
        }
        if (sayac == 0) {
            console.log(num + " asal sayıdır!" )
        }
        else{
            console.log(num + " asal sayıdı değildir")
        }
    }
}
allNumbers()
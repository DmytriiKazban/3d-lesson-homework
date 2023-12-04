
//реалізувати реверс стрінги (вивод в зворотньому порядку)
const reveseString = (arg) => {
    let newString = ""
    for (i = arg.length - 1; i >= 0; i--){
        newString += arg[i]
    }
    console.log(`Here is the new reversed string ${newString}`)
}
reveseString("Lorem impsum")


//реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)
const polindrom = (secondArg) => {
    let secondNewString = ""
    for (i = secondArg.length - 1; i >= 0; i--){
        secondNewString += secondArg[i]
    }

    if ( secondArg === secondNewString){
        return console.log(`This word is polindrom "${true}"`)
    } else {
        return console.log(`This word is not polindrom "${false}"`)
    }
}
polindrom("PUP")


//вивести тільки парні числа з масиву, вивести в зворотньому порядку
const isDevidedBy2 = (arayOfNumbers) => {
    const devideOnTwo = []

    for (i = 0; i < arayOfNumbers.length; i++){
        if (arayOfNumbers[i] % 2 === 0){
            devideOnTwo.push(arayOfNumbers[i]);
        }
    }
    console.log(devideOnTwo)
}
isDevidedBy2([71238123,9310231,444444,9999999,5666])

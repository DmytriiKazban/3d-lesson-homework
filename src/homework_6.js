
//створити 3 обʼєкти через {}
let firstObject = {
    qwe: 'qwe',
    2 : 3,
    goodAray: [3,4,5,6]
}

let secondObject = {
    newObj: {
        name: 'Dmytrii'
    }
}

let thirdObject = {
    func: function myName () {
        console.log(secondObject.name)
    }
}


//створити 3 обʼєкти через Object()
// let firstObjfirst = new Object()
// firstObjfirst.name = 'Dmytrii'
// console.log(firstObjfirst)

// let secondObj = new Object()
// secondObj.age = 100
// console.log(secondObj)

let thirdObj = new Object()
thirdObj.occupation = 'QA'
console.log(thirdObj)

//створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
const dmytrii = Object.create(thirdObj, {isAutomation: {value: "Automation"}})
console.log(dmytrii)
console.log(dmytrii.isAutomation)



const jsAutomation = {
    accomplishment(){
        console.log(`I'll become a good automation and my name is ${this.name}`);
    }
}
function personName(name) {
    this.name = name
}
Object.assign(personName.prototype, jsAutomation)

const dmytriiAutomation = new personName("Dmytrii")
console.log(dmytriiAutomation.accomplishment())

// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let engineer = {
    name: "Dmytrii",
    secondName: "Kazban"
}

let QA_engineer = {
    age: '27'
}

QA_engineer.__proto__ = engineer

for (value in QA_engineer) {
    console.log(QA_engineer[value])
}

//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
const person = {
    greetings(){
        console.log(`JS QA automation course by ${this.param}`)
    }
}



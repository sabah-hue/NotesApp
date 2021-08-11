//// create opject
const person = {
    name : 'sabah',
    age : '15'
}
console.log(person)

/////// convert to json
const personjson = JSON.stringify(person)
console.log(personjson)

/////// write
const fs = require('fs')
fs.writeFileSync('txt.json' , personjson)

/////// read
console.log(fs.readFileSync('txt.json').toString())

/////// convert to opject
const personopject = JSON.parse(personjson)
console.log(personopject)

/////// modify opject
personopject.name = 'Ahmed'
personopject.age = '20'

console.log(personopject)

/////// convert to json
const personjson2 = JSON.stringify(personopject)
console.log(personjson2)

/////// write
fs.writeFileSync('txt.json' , personjson2)

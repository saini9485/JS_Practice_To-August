//without Factory Method
let person1 = {
    name: "rajesh",
    age: 22,
    place: "Noida"
}

let person2 = {
    name: "Virendra",
    age: 20,
    place: "Meerut"
}

let person3 = {
    name: "Riyaj",
    age: 23,
    place: "Sultanpur"
}
// console.log(person1)

//with Factory Method
function createPerson (name, age, place){
    return {
        name:name,
        age:age,
        place:place,
    }
}
const Rajesh = createPerson("rajesh",22,"noida")
const Riyaj = createPerson("Riyaj",23,"Sultanpur")
const Virendra = createPerson("Virendra",21,"Meerut")
console.log(Rajesh)  //{ name: 'rajesh', age: 22, place: 'noida' }
console.log(Riyaj) //{ name: 'Riyaj', age: 23, place: 'Sultanpur' }
console.log(Virendra)//{ name: 'Virendra', age: 21, place: 'Meerut' }
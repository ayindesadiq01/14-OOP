'use strict';
const Person = function(firstName, birthYear) {
 // console.log(this)
 this.firstName = firstName
 this.birthYear = birthYear
}
// console.log(new Person('John', 1990))

// New {} is created
// Function is called, this = {}
// {} linked to the prototype
// Function automatically return {}
const jonas = new Person('John', 1990);
const maltida = new Person('maltida', 2000);
console.log(jonas, maltida)

Person.hey = function() {
  console.log('Hey there😎');
}
Person.hey()

// PROTOTYPES
// console.log()
Person.prototype.calcAge = function(){
 console.log(2037 - this.birthYear)
}
Person.prototype.subAge = function() {
 console.log(2002 - this.birthYear)
}

jonas.calcAge();
maltida.calcAge();
maltida.subAge();
console.log(jonas)
console.log(jonas.__proto__);
console.log(Person.prototype)
// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)8
// console.log(Person.prototype.isPrototypeOf(Person))
// console.log(Person.prototype.isPrototypeOf(jonas))
// console.log(jonas.hasOwnProperty('calcAge'))

Person.prototype.skushi = 'Home suschies'
console.log(jonas.skushi, maltida.skushi);

console.log(jonas.__proto__, Person.prototype);
console.log(jonas.__proto__.__proto__) // Gives prototype property of the Objects

const arr = [ 2,3,5,3,4,5,6,5,]

Array.prototype.unique = function() {
 return [...new Set(arr)]
}
console.log(arr.unique())

// CODE CHALLENGE 1
// BMW
const Car = function(make, speed) {
 this.make = make;
 this.speed = speed;
}
const BMW = new Car('BMW', 120)

Car.prototype.accelerate = function() {
 console.log(`${this.speed + 10}km/h`)
}
Car.prototype.break = function() {
  console.log(`${this.speed - 5}km/h`)

}
BMW.accelerate();
BMW.break();


class Cars {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }
  accelerate () {
    return this.speed += 10
  }
  break () {
    return this.speed -= 5
  }

  // GETTER
  get speedUS() {
    return this.speed / 1.6;
  }
  // SETTER
  set speedUs(speed) {
    return this.speed * 1.6;
  }
}
const peace = new Cars('Ford', 120);
console.log(peace.accelerate())
console.log(peace.break())
console.log(peace.speedUS) 
// console.log(peace.speedUs(120))

// INHERITANCE IN CLASSES
const Persons = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this.birthYear)

}
Persons.prototype.calcAge = function() {
  return (2020 - birthYear);
}
const john = new Persons('John', 1999)
// console.log(john.calcAge())
console.log(john.__proto__ === Persons.prototype)


const Students = function(firstName, birthYear, course) {
  Persons.call(this, firstName, birthYear);
  this.course = course;
  console.log(this.birthYear)

}
// Inorder to inherit the prototype property of the parent Class we use the Object.Create to Link the Parent and Child classes together. The Student.prototype now inherit the prototype of the Persons
//LINKING PROTOTYPE
Students.prototype = Object.create(Persons.prototype)
// Students.prototype = Persons.prototype
// Students.prototype = Persons.prototype wont work because this terminology it implies that the students.protoype should be exactly equal to the persons. prototype. But using an Object.create() to link the two classes together it means that we allowing the child element to inherit the prototype property of the parent element. (Students.prototype = Object.create(Persons.prototype)) will produce an empty object.
// The whole idea behind INHERITANCE is the child classes can share behaviour from there parent classes. What we are trying to do here is to mame Persons.prototype the prototype of Students

Students.prototype.studentInfo = function(){
  console.log(`My name is ${this.firstName} and I studied ${this.course}`)
}

const paul = new Students ('Paul', 2002, 'finance');
paul.studentInfo();
// paul.cAge();
// console.log(Students.prototype)






// MERCEDES
const Merce = function(make, speed) {
 this.make = make;
 this.speed = speed;
}
const mercedes = new Merce('Mercedes', 95);

Merce.prototype.accelerate = function(){
  return `${this.speed + 10}km/h`
}
Merce.prototype.brake = function(){
  return `${this.speed - 5}km/h`
}

console.log(mercedes.accelerate(), mercedes.brake())

// PRACTICE
const Player = function(club, birthYear){
  this.club = club;
  this.birthYear = birthYear;
}
const mount = new Player('Chelsea', 1999);
const james = new Player('Chelsea', 2022)
// console.log(mount.__proto__ === Player.prototype)
Player.prototype.calcAge = function() {
  return Math.abs(this.birthYear - new Date().getFullYear());
}
console.log(mount.calcAge())
console.log(james.calcAge())


// PRACTICE 
const Country = function(africa, population) {
  this.africa = africa;
  this.population = population;
}
const zonal = new Country('Nigeria', 2000);
console.log(zonal)

Country.prototype.calPopulation = function() {
  console.log(this.population * 500000);
}
zonal.calPopulation();

// ES6 CLASSES
class personCl {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  clacAge (){
    console.log(2034 - this.age)
  }

  set fullName(name) {
    console.log(name)
    if(name.includes(' ')) this._fullnmae = name;
    else alert(`${name} is not a full name!`)
  }

  // Static Method
  static hey() {
    console.log('Hellooo')
  }
}
const jessy = new personCl('biodun cdq', 2002)
jessy.clacAge();
personCl.hey()
// PRACTICE
class artist {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  clacAge () {
    return 2022- this.age
  }
}
const jonass = new artist('olamide', 2000);
console.log(jonass.clacAge())

//SETTER AND GETTER PROPERTIES (ACCESSOR PROPERTY)
const account = {
  owner: 'Jonas',
  movements: [200, 400, 40, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

  
}
console.log(account.latest)
account.latest = 50
console.log(account.movements)

// CHALLENGE

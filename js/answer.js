


/** ======================================================================
 * JS- objects
 *
 * Practice basics on objects.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Create object
 *
 * Start by creating an empty object called `person` by using the object
 * literal.
 *
 */



/**
 * Exercise 1.1 
 *
 * Give your person-object the property `firstName` with a value of `"Isaac"`.
 * Add a method called `print1()` that returns a presentation of the object,
 * like this: `"My name is Isaac."`
 * Use `this.firstName` to construct the string.
 *
 * Answer with the result from calling `person.print1()`.
 
 */

let person = {
    // Property
    firstName: "Isaac",
    

    // Method
    print1: function() {
        return `My name is ${this.firstName}.`;
    }
}

console.log(person.print1());



/**
 * Exercise 1.2 
 *
 * Add properties `lastName` and `nationality` to your person-object. Their
 * values should be `"Newton"` and `"England"`.
 *
 * Create the method `person.print2()` which should say: `"My name is Isaac
 * Newton from England."`.
 
 */

person.lastName = 'Newton',
person.nationality = 'England',
person.print2 = function () {
    return `My name is ${this.firstName} ${this.lastName} from ${this.nationality}.`;
};
 
console.log(person.print2());




/**
 * Exercise 1.3 
 *
 * Add the property `born` with the value of a Date object: `"1643-01-04"`.
 *
 * Create a method `print3()` that says exactly the same as `print2()`
 * followed by `"I was born 1643."`.
 
 */

// Code for showing how the date object works
// let date= new Date("1643-01-04");
// console.log(date.getFullYear());
// console.log(date.getDay()); // 0-6. From sunday - saturday




// Solution 1
// person.born = new Date("1643-01-04");
// person.print3 = function () {
//    return `My name is ${this.firstName} ${this.lastName} from ${this.nationality}. I was born ${this.born.getFullYear()}.`;
// };

// Solution 2
person.born = new Date("1643-01-04");
person.print3 = function () {
   return `${this.print2()} I was born ${this.born.getFullYear()}.`;
};
  


console.log(person.print3());


/**
 * Exercise 1.4 
 *
 * Create a second person, called `person2` by using built-in function
 * `Object.create()`.
 *
 * person2 should have the following properties: `"Henri", "Becquerel",
 * "France", "1852-12-15"`.
 *
 * Print out details on the second person using `person2.print3()`.
 
 */


let person2 = Object.create(person);

person2.firstName = "Henri";
person2.lastName = "Becquerel";
person2.nationality = "France";
person2.born = new Date("1852-12-15")
 

console.log(person2.print3());


/**
 * Exercise 1.5 
 *
 * Add the method, `init(firstName, lastName, nationality, born)`, to your
 * Person-object. The method should help you create new Person-objects.
 *
 * Try it out using the following properties: `"Albert", "Einstein",
 * "Germany", "1879-03-14"`.
 *
 * Name the variable holding the person `person3`.
 *
 * Print out details on the third person using `person3.print3()`.

 */


person.init = function (firstName, lastName, nationality, born) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.born = new Date(born);
};

const person3 = Object.create(person);
person3.init('Albert', 'Einstein', 'Germany', '1879-03-14');


console.log(person3.print3());


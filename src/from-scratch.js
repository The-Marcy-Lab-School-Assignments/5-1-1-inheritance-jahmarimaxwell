/// Parent Class
class Quadrilateral {
   constructor(side1,side2,side3,side4) {
    this.side1 = side1;
    this.side2 = side2; 
    this.side3 = side3; 
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}
/// Class inherits Quadrilateral
class Rectangle extends Quadrilateral {
    constructor(side1, side2) {
      // super will reference the constructor function of the parent class/superclass
      // the values passed into the super function will sub for the values in the constructor
      super(side1, side2, side1, side2);
    }
  
    getArea(){
      return this.side1 * this.side2;
    }
  }
/// Inheriting the Rectangle class
  class Square extends Rectangle {
    constructor(side1){
      super(side1, side1);
    }
    
    getDiagonal(){
      const diagonal = this.side1 ** 2 + this.side1 ** 2
      return Math.sqrt(diagonal)
    }
  }

/* Be creative with this one! */
class Person {
  static #people = [];

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Person.#people.push(this);
  }

  static listAll() {
    return [...Person.#people];
}
  static findBy(age) {
    return Person.#people.find(person => person.age === age);
}

  }


module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};

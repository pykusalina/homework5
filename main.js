// Task 1
//  let mentor = { 
//     course: "JS fundamental", 
//      duration: 3,
//     direction: "web-development" 
// };

// function propsCount(currentObject) {
//     let length = 0;
//     for( let key in mentor ) {
//         if( mentor.hasOwnProperty(key) ) {
//             ++length;
//         }
//     }
//     return length;
// };
//console.log( propsCount(currentObject.Data));

// Task 2
// let obj = {
//     name: 'jake',
//     lastname: 'Jonson',
//     age: 20,
//     heigt: 180,
//     married: true
// };

//function showProps(obj) {
    //     let length = 0;
    //     for( let key in obj ) {
    //         if( obj.hasOwnProperty(key) ) {
    //             ++length;
    //         }
    //     }
    //     return length;

//console.log(showProps(obj));

// Task 3
// class Person{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         return this.name + this.surname;
//     }
// }

//let jake = new Person('jake', 'jonson');
// person.showfullName();

// class Student extends Person {
//     constructor(name, surname, year, middleName) {
//         super(name, surname);
//         this.year = year;
//         this.middleName = middleName;
//     }

//     showFullName(midleName) {
//      return this.name + this.surname + this.middleName;
//     }

//     showCourse() {
//         for (let i = 0; i < 6; i++) {
//             return this.year[i];
//         }
//     }
// }

// let student = new Student('jake', 'jonson', 2020, 'jacobs');
// Student.showFullName();
// Srudent.showCourse();

// TAsk 4
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary() {
//         return this.dayRate * this.workingDays;
//     }
// }
// class Worker {
//     _experience = 1.2;

//     showSalaryWithExperience() {
//         return (this.dayRate * this.workingDays) * this._experience;
//     }

//     set experience(value) {
//       if (value > 1.5) throw new Error('something go wrong');
//       this._experience = value;
//     }

//     get _experience() {
//         return this._experience;
//     }

//     showSalaryWithExperience() {
//         return (this.dayRate * this.workingDays) * this._experience;
//     }
// }
// let workers =[ new Worker('bob brown', 10, 2), new Worker("John Johnson", 20, 23), new Worker("Tom Tomson", 48, 22)];

//  function sortWorkers() {
//     workers.sort();
//  }
//  sortWorkers();


// Task 5
// class  GeometricFigure {

//     getArea() {
//         return 0;
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;

//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(p, r) {
//         this.p = p;
//         this.r = r;
//     }
//     getArea() {
//      return this.p * this.r
//     }

// }


// class Square extends GeometricFigure {
//     constructor(a) {
//         this.a = a;
//     }

//     getArea() {
//         return this.a * 4;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(r) {
//         this.r =r;
//     }

//     getArea() {
//         return this.r * 2;
//     }
// }
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];


// function handleFigures(figures) {

//         if (figures instanceof GeometricFigure) {
//              return true;
//         } else {
//             return false;
//         }

//         const sum = figures.reduce((total, currentItem) => {
//             total += currentItem;
//             return total;
//         }, 0);
        
//         console.log(sum);
//     }


//using constructor 
function Person(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}
Person.prototype.sleep = function(hours) {
    if (hours > 7) {
        this.sleepMood = "lazy";
    } else if (hours < 7) {
        this.sleepMood = "tired";
    } else {
        this.sleepMood = "happy";
    }
}
Person.prototype.eat = function(meals) {
    switch (meals) {
        case 3:
            this.healthRate = 100;
            break;
        case 2:
            this.healthRate = 75;
            break;
        case 1:
            this.healthRate = 50;
            break;
    }
}
Person.prototype.buy = function(items) {
    if (items > 0) {
        this.money -= 10 * items;
    }
}
let person1 = new Person("Rehab", 100, "awake", 80);
person1.buy();
person1.eat();
person1.sleep();

console.log(person1.fullName);
console.log(person1.money);
console.log(person1.sleepMood);
console.log(person1.healthRate);

// using classes 

// class Person {
//     constructor(fullName, money, sleepMood, healthRate) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;
//     }
//     sleep(hours) {
//         if (hours > 7) {
//             this.sleepMood = "lazy";
//         } else if (hours < 7) {
//             this.sleepMood = "tired";
//         } else {
//             this.sleepMood = "happy";
//         }
//     }
//     eat(meals) {
//         switch (meals) {
//             case 3:
//                 this.healthRate = 100;
//                 break;
//             case 2:
//                 this.healthRate = 75;
//                 break;
//             case 1:
//                 this.healthRate = 50;
//                 break;
//         }
//     }
//     buy(items) {
//         if (items > 0) {
//             this.money -= 10 * items;
//         }
//     }
// }
// let person1 = new Person("Rehab", 100, "awake", 80);
// person1.buy();
// person1.eat();
// person1.sleep();


// console.log(person1.fullName);
// console.log(person1.money);
// console.log(person1.sleepMood);
// console.log(person1.healthRate);

// // using OLOO

// let PersonMethods = {
//     sleep: function(hours) {
//       if (hours > 7) {
//         this.sleepMood = "lazy";
//       } else if (hours < 7) {
//         this.sleepMood = "tired";
//       } else {
//         this.sleepMood = "happy";
//       }
//     },
//     eat: function(meals) {
//       switch (meals) {
//         case 3:
//           this.healthRate = 100;
//           break;
//         case 2:
//           this.healthRate = 75;
//           break;
//         case 1:
//           this.healthRate = 50;
//           break;
//       }
//     },
//     buy: function(items) {
//       if (items > 0) {
//         this.money -= 10 * items;
//       }
//     },
//   };
  
//   function Person(fullName, money, sleepMood, healthRate) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMood = sleepMood;
//     this.healthRate = healthRate;
//   }
  
//   Object.assign(Person.prototype, PersonMethods);
  
  // let person1 = new Person("Rehab", 100, "awake", 80);
// person1.buy();
// person1.eat();
// person1.sleep();


// console.log(person1.fullName);
// console.log(person1.money);
// console.log(person1.sleepMood);
// console.log(person1.healthRate);

//using factory function 

// function createPerson(fullName, money, sleepMood, healthRate) {
//     return {
//       fullName,money,sleepMood,healthRate,
//       sleep(hours) {
//         if (hours === 7) {
//           this.sleepMood = "happy";
//         } else if (hours < 7) {
//           this.sleepMood = "tired";
//         } else {
//           this.sleepMood = "lazy";
//         }
//       },
//       eat(meals) {
//         if (meals === 3) {
//           this.healthRate = 100;
//         } else if (meals === 2) {
//           this.healthRate = 75;
//         } else if (meals === 1) {
//           this.healthRate = 50;
//         }
//       },
//       buy(items) {
//         this.money -= items * 10;
//       },
//     };
//   }
//    let person1 = new Person("Rehab", 100, "awake", 80);
// person1.buy();
// person1.eat();
// person1.sleep();


// console.log(person1.fullName);
// console.log(person1.money);
// console.log(person1.sleepMood);
// console.log(person1.healthRate);
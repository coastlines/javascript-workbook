'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// CrewMember Class
class CrewMember {
  constructor (name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
   enterShip(Ship) {
    this.ship = Ship;
    Ship.crew.push(this);
  }
}

// Ship Class
class Ship {
  constructor (name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }


  // Mission Statement
  missionStatement() {
    if (this.crew.length == 0) {
      return "Can't perform a mission yet."
      } else if (this.crew.length > 0) {
          let rightCrew = 0;
          let wrongCrew = 0;
          for (const member in this.crew) {
            if ((jobTypes[this.crew[member].job] === this.type) || (this.crew[member].job ===  'programmer')) {
              rightCrew += 1;
              console.log("right crew count " + rightCrew);
              console.log(`${jobTypes[this.crew[member].job]}`);
              console.log(this.type);
              return this.ability;
              } else if ( ((rightCrew < 0) || (rightCrew == "undefined")) && (wrongCrew == 0) || (wrongCrew == undefined)) {
                return "Can't perform a mission yet."
              }
          }
      } 
    }
  }

//    // Mission Statement -- almost
//    missionStatement() {
//     if (this.crew.length == 0) {
//       return "Can't perform a mission yet."
//       } else if (this.crew.length > 0) {
//           for (let member in this.crew) {
//             if ((jobTypes[this.crew[member].job] === this.type) || (jobTypes[this.crew[member].job] ===  'programmer')) {
//               console.log(`${jobTypes[this.crew[member].job]}`);
//               console.log(this.type);
//               return this.ability;
//               } else if (this.crew[member].job !== Object.values(jobTypes)) {
//                 console.log(`first else if ${jobTypes[this.crew[member].job]}`);
//                 console.log(this.type);
//                 return "Can't perform a mission yet."; 
//               }
//           }
//       } 
//   }
// }

  // // Mission Statement
  // missionStatement() {
  //   if (this.crew.length == 0) {
  //     return "Can't perform a mission yet."
  //     } else if (this.crew.length > 0) {
  //         let rightCrew = 0;
  //         let wrongCrew = 0;
  //         for (const member in this.crew) {
  //           if ((jobTypes[this.crew[member].job] === this.type) || (this.crew[member].job ===  'programmer')) {
  //             rightCrew += 1;
  //             console.log("right crew count " + rightCrew);
  //             console.log(`${jobTypes[this.crew[member].job]}`);
  //             console.log(this.type);
  //             return this.ability;
  //             } else if ( ((rightCrew < 0) || (rightCrew == "undefined")) && (wrongCrew == 0) || (wrongCrew == undefined)) {
  //               return "Can't perform a mission yet."
  //             }
  //         }
  //     } 
  //   }
  // }

//  // Mission Statement
//  missionStatement() {
//   if (this.crew.length == 0) {
//     return "Can't perform a mission yet."
//     } else if (this.crew.length > 0) {
//         let rightCrew = 0;
//         for (const member in this.crew) {
//           if ((jobTypes[this.crew[member].job] === this.type) || (jobTypes[this.crew[member].job] ===  'programmer')) {
//             rightCrew += 1;
//             console.log("right crew count " + rightCrew);
//             console.log(`${jobTypes[this.crew[member].job]}`);
//             console.log(this.type);
//             return this.ability;
//             } else if (this.crew[member].job !== Object.values(jobTypes)) {
//               console.log(`first else if ${jobTypes[this.crew[member].job]}`);
//               console.log(this.type);
//               return "Can't perform a mission yet."; 
//             }
//         }
//     } 
// }
// }

//   // Mission Statement
//   missionStatement() {
//     if (this.crew.length == 0) {
//       return "Can't perform a mission yet."
//       } else if (this.crew.length > 0) {
//       for (let member in this.crew) {
//         if ((jobTypes[this.crew[member].job] === this.type) || (jobTypes[this.crew[member].job] ===  'programmer')) {
//           return this.ability;
//         } else {
//           return "Can't perform a mission yet.";
//         }
//       }
//       } else {
//       return "Can't perform a mission yet.";
//     }
//   }
// }


// } else if (this.crew.length > 0) {
//   for (let member in this.crew) {
//     const theRightCrew = this.crew.filter(member => 
//       (jobTypes[this.crew[member].job] === this.type) || (jobTypes[this.crew[member].job] ===  'programmer')
//     )}
//     if (theRightCrew.length > 0) {
//       return this.ability;
//     }
// } else {
// return "Can't perform a mission yet."
// }

// } else if (this.crew.length > 0) {
//   for (let member in this.crew) {
//     if ((jobTypes[this.crew[member].job] === this.type) || (jobTypes[this.crew[member].job] ===  'programmer')) {
//       return this.ability;
//     } else {
//       return "Can't perform a mission yet.";
//     }
//   }
// } else {
//   return "Can't perform a mission yet.";
// }

//  // Mission Statement
//  missionStatement() {
//   if (this.crew.length == 0) {
//     return "Can't perform a mission yet."
//   } else if (this.crew.length > 0) {
//       let shipType = this.type;
//       const theRightCrew = Object.values(shipType).filter(function(shiptype) {
//         return Object.values(shipType) == jobTypes[Object.values(this.crew[member].job)]
//       });
//   } else {
//     return "Can't perform a mission yet."
//   }
// }
// }

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

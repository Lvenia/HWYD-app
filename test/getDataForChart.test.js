import { expect } from 'chai';
import { getDataForChart } from '../src/components/Overview/getDataForChart.js';

describe('getDataForChart', () => {

  describe('dayRate value', () => {
    it('dayRate is required', () => {
      const testInputObject = {
        dayRate: 4
      };
      const result = getDataForChart(testInputObject);
      expect(result.dayRate).to.be.equal(4);
    });
  });

  describe('calculate points', () => {
    describe('sleep category based on sleepInterupted, sleptWell, snoozing ', () => {
      it('should ignore irrelative answers', () => {
        const testInputObject = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.sleepCatPoints).to.be.eql(0);
      });
      it('should give max points for all beneficial answers ', () => {
        const testInputObject = {
          dayRate: 4,
          sleepInterupted: false,
          sleptWell: true,
          snoozing: false,
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.sleepCatPoints).to.be.eql(30);
      });
      it('should give min points for all unbeneficial answers ', () => {
        const testInputObject = {
          dayRate: 4,
          sleepInterupted: true,
          sleptWell: false,
          snoozing: true,
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.sleepCatPoints).to.be.eql(-30);
      });
      it('should calculate both negative and positive values ', () => {
        const testInputObject = {
          dayRate: 4,
          sleepInterupted: true,
          sleptWell: true,
          snoozing: true,
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.sleepCatPoints).to.be.eql(-10);
      })
      it('should calculate both negative and positive values ', () => {
        const testInputObject = {
          dayRate: 4,
          sleepInterupted: false,
          sleptWell: false,
          snoozing: false,
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.sleepCatPoints).to.be.eql(10);
      })
    });

    describe('nutrition category based on junkFood, mealRegularity, skippedMeal ', () => {
      it('should ignore irrelative answers', () => {
        const testInputObject = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.nutritionPoints).to.be.eql(0);
      });
      it('should give max points for all beneficial answers ', () => {
        const testInputObject = {
          dayRate: 4,
          junkFood: false,
          mealRegularity: true,
          skippedMeal: false
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.nutritionPoints).to.be.eql(30);
      });
      it('should give min points for all unbeneficial answers ', () => {
        const testInputObject = {
          dayRate: 4,
          junkFood: true,
          mealRegularity: false,
          skippedMeal: true
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.nutritionPoints).to.be.eql(-30);
      });
      it('should calculate both negative and positive values ', () => {
        const testInputObject = {
          dayRate: 4,
          junkFood: true,
          mealRegularity: true,
          skippedMeal: true
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.nutritionPoints).to.be.eql(-10);
      })
      it('should calculate both negative and positive values ', () => {
        const testInputObject = {
          dayRate: 4,
          junkFood: false,
          mealRegularity: false,
          skippedMeal: false
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.nutritionPoints).to.be.eql(10);
      });
    });

    describe('hydration category based on waterGlasses', () => {
      it('should ignore irrelative answers', () => {
        const testInputObject = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.hydrationPoints).to.be.eql(0);
      });

      it('waterGlasses should be a number ', () => {
        const result = getDataForChart({ waterGlasses: "not a number" });
        expect(result.points.hydrationPoints).to.be.eql(0);
      });
      it('waterGlasses should be a positive number ', () => {
        const result = getDataForChart({ waterGlasses: -10 });
        expect(result.points.hydrationPoints).to.be.eql(0);
      });
      it('should give min points for 0 glasses', () => {
        const result = getDataForChart({ waterGlasses: 0 });
        expect(result.points.hydrationPoints).to.be.equal(-30);
      });
      it('should give max points for 6 and more glasses', () => {
        const result = getDataForChart({ waterGlasses: 6 });
        expect(result.points.hydrationPoints).to.be.equal(30);
      });
      it('should not be a maximum limit', () => {
        const result = getDataForChart({ waterGlasses: 1100 });
        expect(result.points.hydrationPoints).to.be.equal(30);
      });
      it('should give 10 point for 1, 2 or 3 glasses of water', () => {
        const result = getDataForChart({ waterGlasses: 1 });
        expect(result.points.hydrationPoints).to.be.equal(10);
      });
      it('should give 10 point for 1, 2 or 3 glasses of water', () => {
        const result = getDataForChart({ waterGlasses: 4 });
        expect(result.points.hydrationPoints).to.be.not.equal(10);
      });
      it('should give 20 point for 4 or 5 glasses of water', () => {
        const result = getDataForChart({ waterGlasses: 4 });
        expect(result.points.hydrationPoints).to.be.equal(20);
      });
      it('should give 20 point for 4 or 5 glasses of water', () => {
        const result = getDataForChart({ waterGlasses: 6 });
        expect(result.points.hydrationPoints).to.be.not.equal(20);
      });
    });

    describe('activity category points', () => {

      it('should ignore irrelative answers', () => {
        const testInputObject = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(NaN);
        // expect(result.points.ativitiesPoints).to.be.eql(NaN);
        ///mam alternatywne rozwiązanie w notatkach aby reselt był 0
      });

      it('should not add "neutral" activities: 0/10.5 => 0 points', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 3.5,
            energyImpact: "neutral"
          },
          sport: {
            activityTime: 3.5,
            energyImpact: "neutral"
          },
          work: {
            activityTime: 3.5,
            energyImpact: "neutral"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(0);
      });

      it('should not add "neutral" activities: 7/10.5 > 2/3 => 20points', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 3.5,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 3.5,
            energyImpact: "neutral"
          },
          work: {
            activityTime: 3.5,
            energyImpact: "uplifting"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(20);
      });

      it('should give max points if 3/3 of activity time (all time) was pleasant', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 1,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 1,
            energyImpact: "uplifting"
          },
          work: {
            activityTime: 1,
            energyImpact: "uplifting"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(30);
      });

      it('should give 20 points if 2/3 of activity time was pleasant: (7-1)/(7+1+1)=6/9=2/3', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 7,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 1,
            energyImpact: "discouraging"
          },
          work: {
            activityTime: 1,
            energyImpact: "neutral"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(20);
      });
      it('should give 10 points if 1/3 of activity time was pleasant: (4.5-1.5-1.5)/(4.5+1.5+1.5)=1.5/7.5 < 2/3', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 4.5,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 1.5,
            energyImpact: "discouraging"
          },
          work: {
            activityTime: 1.5,
            energyImpact: "discouraging"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(10);
      });

      it('should substract unpleasant activities: (6-3)/9=3/9=1/3 => +10 points ', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 3,
            energyImpact: "uplifting"
          },
          work: {
            activityTime: 3,
            energyImpact: "discouraging"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(10);
      });
      it('should substract unpleasant activities: (3-6)/9=-3/9=-1/3 => -10 points ', () => {
        const testInputObject = {
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          },
          sport: {
            activityTime: 3,
            energyImpact: "discouraging"
          },
          work: {
            activityTime: 3,
            energyImpact: "discouraging"
          }
        };
        const result = getDataForChart(testInputObject);
        expect(result.points.ativitiesPoints).to.be.eql(-10);
      });
    })

    describe('total points', () => {
      it('should perform correct calculations & assign the result to correct category', () => {
        const testInputObject = {
          sleepInterupted: false,
          junkFood: false,
          waterGlasses: 7,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          }
        };
        const expectedResult = {
          sleepCatPoints: 10,
          nutritionPoints: 10,
          hydrationPoints: 30,
          ativitiesPoints: 30,
          totalPointsByDay: 80,
        }
        const result = getDataForChart(testInputObject)
        expect(result.points).to.be.eql(expectedResult)
      });
      it('should perform correct calculations & assign the result to correct category', () => {
        const testInputObject = {
          sleepInterupted: true,
          junkFood: true,
          waterGlasses: 0,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "discouraging"
          }
        };
        const expectedResult = {
          sleepCatPoints: -10,
          nutritionPoints: -10,
          hydrationPoints: -30,
          ativitiesPoints: -30,
          totalPointsByDay: -80,
        }
        const result = getDataForChart(testInputObject)
        expect(result.points).to.be.eql(expectedResult)
      });


      it('should perform correct calculations & assign the result to correct category', () => {
        const testInputObject = {
          sleepInterupted: true,
          sleptWell: false,
          snoozing: true,
          junkFood: true,
          mealRegularity: false,
          skippedMeal: true,
          waterGlasses: 0,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "discouraging"
          }
        };
        const expectedResult = {
          sleepCatPoints: -30,
          nutritionPoints: -30,
          hydrationPoints: -30,
          ativitiesPoints: -30,
          totalPointsByDay: -120,
        }
        const result = getDataForChart(testInputObject)
        expect(result.points).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const testInputObject = {
          sleepInterupted: false,
          sleptWell: false,
          snoozing: false,
          junkFood: false,
          mealRegularity: false,
          skippedMeal: false,
          waterGlasses: 10,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          }
        };
        const expectedResult = {
          sleepCatPoints: 10,
          nutritionPoints: 10,
          hydrationPoints: 30,
          ativitiesPoints: 30,
          totalPointsByDay: 80
        }
        const result = getDataForChart(testInputObject)
        expect(result.points).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const testInputObject = {
          sleepInterupted: true,
          sleptWell: true,
          snoozing: true,
          junkFood: true,
          mealRegularity: true,
          skippedMeal: true,
          waterGlasses: 1,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "neutral"
          }
        };
        const expectedResult = {
          sleepCatPoints: -10,
          nutritionPoints: -10,
          hydrationPoints: 10,
          ativitiesPoints: 0,
          totalPointsByDay: -10
        }
        const result = getDataForChart(testInputObject)
        expect(result.points).to.be.eql(expectedResult)
      });

      it('total points can not be less than -120 points', () => {
        const testInputObject = {
          sleepInterupted: true,
          sleptWell: false,
          snoozing: true,
          junkFood: true,
          mealRegularity: false,
          skippedMeal: true,
          waterGlasses: 0,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "discouraging"
          }
        };
        const result = getDataForChart(testInputObject)
        expect(result.points.totalPointsByDay).to.be.not.below(-120)
      });

      it('total points can not be more than 120 points', () => {
        const testInputObject = {
          sleepInterupted: false,
          sleptWell: true,
          snoozing: false,
          junkFood: false,
          mealRegularity: true,
          skippedMeal: false,
          waterGlasses: 10,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          }
        };
        const result = getDataForChart(testInputObject)
        expect(result.points.totalPointsByDay).to.be.below(121)
      });

      it('total points can be 0', () => {
        const testInputObject = {
          sleepInterupted: true,
          sleptWell: false,
          snoozing: true,
          junkFood: true,
          mealRegularity: false,
          skippedMeal: true,
          waterGlasses: 10,
          dailyTasks: {
            activityTime: 3,
            energyImpact: "uplifting"
          }
        };
        const result = getDataForChart(testInputObject)
        expect(result.points.totalPointsByDay).to.be.equal(0)
      });
    });
  });
});

//////////////////////////////////////////////////////////
 // const expectedResult = {
        //   sleepCatPoints: -30,
        //   nutritionPoints: -30,
        //   hydrationPoints: -30,
        //   ativitiesPoints: -30,
        //   totalPointsByDay: -120,
        // }

//all categories: should add positive nimbers, negative numbers, positive and negative numbers, should not mix the categories, shoul not overwatch any key

//getDataForLinearBarChart recieves ([{}, {}....,{}], thisWeek) and calles dataForChart for each {day} and return a chuge config object for the chart.js data prop
//........................................................\

//get dataForChart is called for each day ({})

// createdAt: "2021-02-03T08:14:40.436Z"
// updatedAt: "2021-02-03T08:14:40.436Z"
// userId: "5f9eeba4133b9070e3783765"

// dayRate: 4

// dayNap: false
// sleepInterupted: false
// sleptWell: true
// snoozing: false
// wentToBed: "23:30"
// wokeUp: "07:00"

// junkFood: false
// mealRegularity: true
// skippedMeal: false

// waterGlasses: 6

// dailyTasks: { _id: "601a5b7098ff8feb56d898bc", activityTime: 1, energyImpact: "uplifting" }
// family: { _id: "601a5b7098ff8feb56d898be", activityTime: 0.5, energyImpact: "neutral" }
// friends: { _id: "601a5b7098ff8feb56d898bd", activityTime: 0, energyImpact: "neutral" }
// reading: { _id: "601a5b7098ff8feb56d898bf", activityTime: 0.5, energyImpact: "uplifting" }
// sport: { _id: "601a5b7098ff8feb56d898bb", activityTime: 1, energyImpact: "uplifting" }
// work: { _id: "601a5b7098ff8feb56d898ba", activityTime: 8, energyImpact: "uplifting" }
//
//function returns an object result
// let result = {
//   points: {
//     sleepCatPoints: 0,
//     nutritionPoints: 0,
//     hydrationPoints: 0,
//     ativitiesPoints: 0,
//     totalPointsByDay: 0,
//   },
//   dayRate: dataByDay.dayRate,
//   monthIndex: (new Date(dataByDay.createdAt)).getMonth()
// }

//{points: {…}, dayRate: 4, monthIndex: 1}
// $$dayRate: 4
// monthIndex: 1
// points: { sleepCatPoints: 30, nutritionPoints: 30, hydrationPoints: 30, ativitiesPoints: 30, totalPointsByDay: 120 }
// __proto__: Object














 // it('dayRate is required', () => {
    //   const testInputObject = {
    //     dayRate: undefined
    //   };
    //   const result = getDataForChart(testInputObject);
    //   expect(result.dayRate).to.be.equal(NaN);
    // });

    // it('dayRate can not be less than 1', () => {
    //   const testInputObject = {
    //     dayRate: 0
    //   };
    //   const result = getDataForChart(testInputObject);
    //   expect(result.dayRate).to.be.equal(NaN);
    // })

    // it('dayRate can not be greater than 5', () => {
    //   const testInputObject = {
    //     dayRate: 6
    //   };
    //   const result = getDataForChart(testInputObject);
    //   expect(result.dayRate).to.be.equal(NaN);
    // })


// describe('all categories', () => {
//   it('should not mix categories', () => {
//     const testInputObject = {
//       dayRate: 4,
//       sleptWell: true,
//       junkFood: false,
//       waterGlasses: 9,
//       work: { activityTime: 8, energyImpact: "uplifting" }
//     };
//     const expectedPoints = {
//       sleepCatPoints: 10,
//       nutritionPoints: 10,
//       hydrationPoints: 30,
//       ativitiesPoints: 30,
//       totalPointsByDay: 80,
//     }
//     const result = getDataForChart(testInputObject);
//     expect(result.points).to.be.eql(expectedPoints);
//   })
// })
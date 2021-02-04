import { expect } from 'chai';
import { subtractTimeStrings, calculatePoints } from '../src/utils';

describe('substractTimeStrings', () => {

  it('should recieve two parameters', () => {
    const result = subtractTimeStrings('20:30');
    expect(result).to.be.equal(null);
  });

  it('should throw an error if any parameter is not string', () => {
    expect(() => { subtractTimeStrings(20, 7) }).to.throw();
  });

  //if (startHour > endHour) 23:00 - 7:00
  it('case: startHour > endHour: 23:00-7:00', () => {
    const result = subtractTimeStrings("23:00", "7:00");
    expect(result).to.be.equal('8H 0m')
  });

  ////&& endminuts + minuts to midmight >=  60  (45 + 30)=> 23:30 - 7:45 ; 23:15 - 7:45 ????
  it('case: startHour > endHour: 23:30-7:45', () => {
    const result = subtractTimeStrings("23:30", "7:45");
    expect(result).to.be.equal('8H 15m')
  });

  it('case: startHour > endHour: 23:15-7:45', () => {
    const result = subtractTimeStrings("23:15", "7:45");
    expect(result).to.be.equal('8H 30m')
  });

  ////&& minuts + endminuts to midmight < 60  (15+30) => 23:15 - 7:30; 23:15 - 7:15 ??
  it('case: startHour > endHour: 23:15-7:30', () => {
    const result = subtractTimeStrings("23:15", "7:30");
    expect(result).to.be.equal('8H 15m')
  });

  it('case: startHour > endHour: 23:15-7:15', () => {
    const result = subtractTimeStrings("23:15", "7:15");
    expect(result).to.be.equal('8H 0m')
  });

  // (endHour > startHour)   1:00 - 7:00
  it('case: startHour < endHour: 01:00-07:00', () => {
    const result = subtractTimeStrings("01:00", "07:00");
    expect(result).to.be.equal('6H 0m')
  });

  it('case: hour format witout 0: 1:00-7:00', () => {
    const result = subtractTimeStrings("1:00", "7:00");
    expect(result).to.be.equal('6H 0m')
  });

  ////&& endMinutes >= startMinutes  1:30  - 7:45; 1:30  - 7:30
  it('case: startHour < endHour: 01:30-07:45', () => {
    const result = subtractTimeStrings("01:30", "07:45");
    expect(result).to.be.equal('6H 15m')
  });

  it('case: startHour < endHour: 01:30-07:30', () => {
    const result = subtractTimeStrings("01:30", "07:30");
    expect(result).to.be.equal('6H 0m')
  });

  ////&& endMinutes < startMinutes  1:45  - 7:30;
  it('case: startHour < endHour: 01:45-07:30', () => {
    const result = subtractTimeStrings("01:45", "07:30");
    expect(result).to.be.equal('5H 45m');
  });

  it('case: startHour < endHour: 00:00-24:30', () => {
    const result = subtractTimeStrings("00:00", "24:30");
    expect(result).to.be.equal('24H 30m');
  });

  it('02:00-04:00 should not be equal 4H 00m', () => {
    const result = subtractTimeStrings("02:00", "04:00");
    expect(result).not.to.be.equal('4H 00m');
  });
});

describe('calculatePoints', () => {

  describe('calculate points', () => {

    describe('sleep category based on sleepInterupted, sleptWell, snoozing ', () => {
      it('should ignore irrelative answers', () => {
        const dataByDay = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = calculatePoints(dataByDay);
        expect(result.sleepCatPoints).to.be.eql(0);
      });

      it('should give max points for all beneficial answers ', () => {
        const dataByDay = {
          dayRate: 4,
          sleepInterupted: false,
          sleptWell: true,
          snoozing: false,
        };
        const result = calculatePoints(dataByDay);
        expect(result.sleepCatPoints).to.be.eql(30);
      });

      it('should give min points for all unbeneficial answers ', () => {
        const dataByDay = {
          dayRate: 4,
          sleepInterupted: true,
          sleptWell: false,
          snoozing: true,
        };
        const result = calculatePoints(dataByDay);
        expect(result.sleepCatPoints).to.be.eql(-30);
      });

      it('should calculate both negative and positive values ', () => {
        const dataByDay = {
          dayRate: 4,
          sleepInterupted: true,
          sleptWell: true,
          snoozing: true,
        };
        const result = calculatePoints(dataByDay);
        expect(result.sleepCatPoints).to.be.eql(-10);
      });

      it('should calculate both negative and positive values ', () => {
        const dataByDay = {
          dayRate: 4,
          sleepInterupted: false,
          sleptWell: false,
          snoozing: false,
        };
        const result = calculatePoints(dataByDay);
        expect(result.sleepCatPoints).to.be.eql(10);
      })
    });

    describe('nutrition category based on junkFood, mealRegularity, skippedMeal ', () => {
      it('should ignore irrelative answers', () => {
        const dataByDay = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = calculatePoints(dataByDay);
        expect(result.nutritionPoints).to.be.eql(0);
      });

      it('should give max points for all beneficial answers ', () => {
        const dataByDay = {
          dayRate: 4,
          junkFood: false,
          mealRegularity: true,
          skippedMeal: false
        };
        const result = calculatePoints(dataByDay);
        expect(result.nutritionPoints).to.be.eql(30);
      });

      it('should give min points for all unbeneficial answers ', () => {
        const dataByDay = {
          dayRate: 4,
          junkFood: true,
          mealRegularity: false,
          skippedMeal: true
        };
        const result = calculatePoints(dataByDay);
        expect(result.nutritionPoints).to.be.eql(-30);
      });

      it('should calculate both negative and positive values ', () => {
        const dataByDay = {
          dayRate: 4,
          junkFood: true,
          mealRegularity: true,
          skippedMeal: true
        };
        const result = calculatePoints(dataByDay);
        expect(result.nutritionPoints).to.be.eql(-10);
      });

      it('should calculate both negative and positive values ', () => {
        const dataByDay = {
          dayRate: 4,
          junkFood: false,
          mealRegularity: false,
          skippedMeal: false
        };
        const result = calculatePoints(dataByDay);
        expect(result.nutritionPoints).to.be.eql(10);
      });
    });

    describe('hydration category based on waterGlasses', () => {
      it('should ignore irrelative answers', () => {
        const dataByDay = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = calculatePoints(dataByDay);
        expect(result.hydrationPoints).to.be.eql(0);
      });

      it('waterGlasses should be a number ', () => {
        const result = calculatePoints({ waterGlasses: "not a number" });
        expect(result.hydrationPoints).to.be.eql(0);
      });

      it('waterGlasses should be a positive number ', () => {
        const result = calculatePoints({ waterGlasses: -10 });
        expect(result.hydrationPoints).to.be.eql(0);
      });

      it('should give min points for 0 glasses', () => {
        const result = calculatePoints({ waterGlasses: 0 });
        expect(result.hydrationPoints).to.be.equal(-30);
      });

      it('should give max points for 6 and more glasses', () => {
        const result = calculatePoints({ waterGlasses: 6 });
        expect(result.hydrationPoints).to.be.equal(30);
      });

      it('should not be a maximum limit', () => {
        const result = calculatePoints({ waterGlasses: 1100 });
        expect(result.hydrationPoints).to.be.equal(30);
      });

      it('should give 10 point for 1, 2 or 3 glasses of water', () => {
        const result = calculatePoints({ waterGlasses: 1 });
        expect(result.hydrationPoints).to.be.equal(10);
      });

      it('should give 10 point for 1, 2 or 3 glasses of water', () => {
        const result = calculatePoints({ waterGlasses: 4 });
        expect(result.hydrationPoints).to.be.not.equal(10);
      });

      it('should give 20 point for 4 or 5 glasses of water', () => {
        const result = calculatePoints({ waterGlasses: 4 });
        expect(result.hydrationPoints).to.be.equal(20);
      });

      it('should give 20 point for 4 or 5 glasses of water', () => {
        const result = calculatePoints({ waterGlasses: 6 });
        expect(result.hydrationPoints).to.be.not.equal(20);
      });
    });

    describe('activity category points', () => {

      it('should ignore irrelative answers', () => {
        const dataByDay = {
          dayRate: 4,
          dayNap: false,
          wentToBed: "23:30",
          wokeUp: "07:00"
        };
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(NaN);
      });

      it('should not add "neutral" activities: 0/10.5 => 0 points', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(0);
      });

      it('should not add "neutral" activities: 7/10.5 > 2/3 => 20points', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(20);
      });

      it('should give max points if 3/3 of activity time (all time) was pleasant', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(30);
      });

      it('should give 20 points if 2/3 of activity time was pleasant: (7-1)/(7+1+1)=6/9=2/3', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(20);
      });

      it('should give 10 points if 1/3 of activity time was pleasant: (4.5-1.5-1.5)/(4.5+1.5+1.5)=1.5/7.5 < 2/3', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(10);
      });

      it('should substract unpleasant activities: (6-3)/9=3/9=1/3 => +10 points ', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(10);
      });

      it('should substract unpleasant activities: (3-6)/9=-3/9=-1/3 => -10 points ', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay);
        expect(result.ativitiesPoints).to.be.eql(-10);
      });
    })

    describe('total points', () => {
      it('should perform correct calculations & assign the result to correct category', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result).to.be.eql(expectedResult)
      });

      it('should perform correct calculations & assign the result to correct category', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result).to.be.eql(expectedResult)
      });

      it('total points can not be less than -120 points', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result.totalPointsByDay).to.be.not.below(-120)
      });

      it('total points can not be more than 120 points', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result.totalPointsByDay).to.be.below(121)
      });

      it('total points can be 0', () => {
        const dataByDay = {
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
        const result = calculatePoints(dataByDay)
        expect(result.totalPointsByDay).to.be.equal(0)
      });
    });
  });
});

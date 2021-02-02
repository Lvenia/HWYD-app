import { expect } from 'chai';
import { subtractTimeStrings } from '../src/utils';

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


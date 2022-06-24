import {Person} from '../src/js/planets.js';

describe ('Planet', () => {

  beforeEach(() => {
 
  });

  test('Should create a new person object with age, life expectancy, and age', () => {
    const person = new Person(1, 85, "Tad Strange");
    expect(person.age).toEqual(1);
    expect(person.lifeExp).toEqual(85);
    expect(person.name).toEqual("Tad Strange");
  });

  test('should calculate how many years a user has left to live', () => {
    const person = new Person(1, 85, "Tad Strange");
    expect(person.yearsRem).toEqual(84);
  });
});
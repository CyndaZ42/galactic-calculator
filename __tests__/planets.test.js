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

  test('should calculate age in Mercury years', () => {
    const person = new Person(6, 84, "Tad Strange");
    person.mercury();
    expect(person.mercuryAge).toEqual(25);
  });

  test('should calculate years left in Mercury years', () => {
    const person = new Person(6, 84, "Tad Strange");
    person.mercury();
    expect(person.mercuryLE).toEqual(325);
  });

  test('should calculate age in Venus years', () => {
    const person = new Person(31, 93, "Tad Strange");
    person.venus();
    expect(person.venusAge).toEqual(50);
  });

  test('should calculate years left in Venus years', () => {
    const person = new Person(31, 93, "Tad Strange");
    person.venus();
    expect(person.venusLE).toEqual(100);
  });

  test('should calculate age in mars years', () => {
    const person = new Person(47, 94, "Tad Strange");
    person.mars();
    expect(person.marsAge).toEqual(25);
  });

  test('should calculate years left in mars years', () => {
    const person = new Person(47, 94, "Tad Strange");
    person.mars();
    expect(person.marsLE).toEqual(25);
  });

  test('should return a positive number if user has lived past life expectancy', () => {
    const person = new Person(105, 100, "Tad Strange");
    expect(person.yearsRem).toEqual(5);
  });

    test('should calculate age and years left in Jupiter years', () => {
      const person = new Person(24, 96, "Tad Strange");
      person.jupiter();
      expect(person.jupiterAge).toEqual(2);
      expect(person.jupiterLE).toEqual(6.07);
    });

  });
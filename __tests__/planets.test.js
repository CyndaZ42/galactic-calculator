import {Person} from '../src/js/planets.js';

describe ('Planet', () => {

  beforeEach(() => {
    const person = new Person(1, 85, "Tad Strange");
  });

  test('Should create a new person object with age, life expectancy, and age', () => {
    expect(person.age).toEqual(1);
    expect(person.lifeExp).toEqual(85);
    expect(person.name).toEqual("Tad Strange");
  });
});
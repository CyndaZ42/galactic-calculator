export class Person {
  constructor(age, lifeExp, name){
    this.age = age;
    this.lifeExp = lifeExp;
    this.name = name;

    this.yearsRem = (lifeExp - age);
  }

  mercury() {
    this.mercuryAge = (this.age / 0.24)
    this.mercuryLE = (this.yearsRem / 0.24)
  }
}
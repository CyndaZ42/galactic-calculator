export class Person {
  constructor(age, lifeExp, name){
    this.age = age;
    this.lifeExp = lifeExp;
    this.name = name;

    this.yearsRem = Math.max(lifeExp - age, (lifeExp - age) * -1);
  }

  mercury() {
    this.mercuryAge = (this.age / 0.24);
    this.mercuryLE = (this.yearsRem / 0.24);
  }

  venus() {
    this.venusAge = (this.age / 0.62);
    this.venusLE = (this.yearsRem / 0.62);
  }

  jupiter() {
    this.jupiterAge = (this.age / 1.88);
    this.jupiterLE = (this.yearsRem / 1.88);
  }
}
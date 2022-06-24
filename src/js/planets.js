export class Person {
  constructor(age, lifeExp, name){
    this.age = age;
    this.lifeExp = lifeExp;
    this.name = name;

    this.yearsRem = Math.max(lifeExp - age, (lifeExp - age) * -1);
    if ((lifeExp - age) < 0) {
      this.old = "You are past the life expectancy by ";
    } else {
      this.old = "You have aproxamately ";
    }
  }
  
  mercury() {
    this.mercuryAge = Math.round((this.age / 0.24) * 1000) / 1000;
    this.mercuryLE = Math.round((this.yearsRem / 0.24) * 1000) / 1000;
  }

  venus() {
    this.venusAge = Math.round((this.age / 0.62) * 1000) / 1000;
    this.venusLE = Math.round((this.yearsRem / 0.62) * 1000) / 1000;
  }

  mars() {
    this.marsAge = Math.round((this.age / 1.88) * 1000) / 1000;
    this.marsLE = Math.round((this.yearsRem / 1.88) * 1000) / 1000;
  }

  jupiter() {
    this.jupiterAge = Math.round((this.age / 11.86 * 1000) / 1000);
    this.jupiterLE = Math.round((this.yearsRem / 11.86) * 1000) / 1000;
  }
}
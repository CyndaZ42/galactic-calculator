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
    this.mercuryAge = Math.round((this.age / 0.24) * 100) / 100;
    this.mercuryLE = Math.round((this.yearsRem / 0.24) * 100) / 100;
  }

  venus() {
    this.venusAge = Math.round((this.age / 0.62) * 100) / 100;
    this.venusLE = Math.round((this.yearsRem / 0.62) * 100) / 100;
  }

  mars() {
    this.marsAge = Math.round((this.age / 1.88) * 100) / 100;
    this.marsLE = Math.round((this.yearsRem / 1.88) * 100) / 100;
  }
}
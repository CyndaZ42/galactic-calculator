export class Person {
  constructor(age, lifeExp, name){
    this.age = age;
    this.lifeExp = lifeExp;
    this.name = name;

    this.yearsRem = (lifeExp - age);
  }
}
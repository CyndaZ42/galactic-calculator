import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Person} from '../src/js/planets.js';

$("form#person-creator").submit(function(event){
  event.preventDefault();
  let name = $("#name").val();
  let age = parseInt($("#age").val());
  let lifeExp = parseInt($("#lifeExp").val());
  const person = new Person(age, lifeExp, name);
  person.mercury();
  person.venus();
  person.jupiter();
  $("#mercury").text('Age on Mercury: ' + person.mercuryAge)
  $("#mercury2").text(person.old + person.mercuryLE + ' Mercury years.')
  $("#venus").text('Age on Venus: ' + person.venusAge);
  $("#venus2").text( person.old + person.venusLE + ' Venus years.')
  $("#earth").text('Age on Earth: ' + person.age);
  $("#earth2").text(person.old + person.yearsRem + ' Earth years.')
  $("#jupiter").text('Age on Jupiter: ' + person.jupiterAge);
  $("#jupiter2").text(person.old + person.jupiterLE + ' Jupiter years.')


});
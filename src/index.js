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
});
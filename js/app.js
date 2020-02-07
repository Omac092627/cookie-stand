'use strict'


var customersTrack = []; // Stores1 will store your random function
var locations = [];
var cookiesArray = [];
var customers = [` 6:00am `, ` 7:00am `, ` 8:00am `, ` 9:00am `, ` 10:00am `, ` 11:00am `, ` 12:00pm `, ` 1:00pm `, ` 2:00pm `, ` 3:00pm `, `4:00pm `, ` 5: 00pm `, ` 6: 00pm `, ` 7: 00pm `, ` Total of Locations `];
var totalCookiesArrayForYaBoy = []

function Stores(name, min, max, averageCookieSales) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookieSales = averageCookieSales;

  locations.push(this)//push your new properties into the object constructor
};



var header = function () {
  var headingElement = document.getElementById('head');
  var headElement = document.createTextNode(customers);
  headingElement.appendChild(headElement);




}
header();



new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 27, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);
new Stores('Random', 65, 170, 18.1)


Stores.prototype.random = function () {
  var newArray = [];
  var totalOfCookies = 0; // I want to keep track of the total//
  for (var i = 0; i < 14; i++) {
    var random = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * Math.floor(this.averageCookieSales);
    totalOfCookies = totalOfCookies + random;
    newArray.push(`${customersTrack} ${random}  cookies`);

  }

  newArray.push(`${cookiesArray} ${totalOfCookies}`)

  return newArray; // returning customerstrack array to update//
}



var bodyElement = document.getElementById('head');
var bodyFirstElement = document.createElement('th');
bodyFirstElement.textContent = locations[0].name;
bodyElement.appendChild(bodyFirstElement);
var nameElement = document.createElement('td');
nameElement.textContent = locations[0].random();
bodyElement.appendChild(nameElement);

var bodyFirstElementTwo = document.createElement('th');
bodyFirstElementTwo.textContent = locations[1].name;
bodyFirstElement.appendChild(bodyFirstElementTwo);
var nameElement1 = document.createElement('td');
nameElement1.textContent = locations[1].random();
nameElement.appendChild(nameElement1);

var bodyFirstElementThree = document.createElement('th');
bodyFirstElementThree.textContent = locations[2].name;
bodyFirstElementTwo.appendChild(bodyFirstElementThree);
var nameElement2 = document.createElement('td');
nameElement2.textContent = locations[2].random();
nameElement1.appendChild(nameElement2);

var bodyFirstElementFour = document.createElement('th');
bodyFirstElementFour.textContent = locations[3].name;
bodyFirstElementThree.appendChild(bodyFirstElementFour);
var nameElement3 = document.createElement('td');
nameElement3.textContent = locations[3].random();
nameElement2.appendChild(nameElement3);

var bodyFirstElementFive = document.createElement('th');
bodyFirstElementFive.textContent = locations[4].name;
bodyFirstElementFour.appendChild(bodyFirstElementFive);
var nameElement4 = document.createElement('td');
nameElement4.textContent = locations[4].random();
nameElement3.appendChild(nameElement4);






var footer = function () {
  var footAppendElement = document.createElement('th');
  footAppendElement.textContent = 'Total: ';
  bodyFirstElementFive.appendChild(footAppendElement);
  var nameElement5 = document.createElement('td')
  nameElement5.textContent = locations[5].random();
  nameElement4.appendChild(nameElement5);
}


footer();
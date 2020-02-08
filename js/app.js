'use strict'


var locations = [];
var cookiesArray = [];
var customers = [`6:00am`, `7:00am`, `8:00am`, `9:00am`, `10:00am`, `11:00am`, `12:00pm`, `1:00pm`, `2:00pm`, `3:00pm`, `4:00pm`, `5:00pm`, `6:00pm`, `7:00pm`,];

function Stores(name, min, max, averageCookieSales, [], totalOfCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookieSales = averageCookieSales;
  this.soldCookiesPerHour = [];
  this.totalOfCookies = totalOfCookies;
  locations.push(this)//push your new properties into the object constructor
};


new Stores('Seattle', 23, 65, 6.3, [], 0);
new Stores('Tokyo', 3, 24, 1.2, [], 0);
new Stores('Dubai', 11, 27, 3.7, [], 0);
new Stores('Paris', 20, 38, 2.3, [], 0);
new Stores('Lima', 2, 16, 4.6, [], 0);



Stores.prototype.random = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min) + this.min;
};

Stores.prototype.cookiesPerHour = function () {
  for (var c = 0; c < customers.length; c++) {
    this.soldCookiesPerHour[c] = Math.round(this.soldCookiesPerHour[c] = this.averageCookieSales * this.random());
    this.totalOfCookies += this.soldCookiesPerHour[c];
  }
};

var header = function (tableElement, textContent) {
  var tableMain = document.getElementById('gotit');
  var tableData = document.createElement(tableElement);
  tableData.textContent = textContent;
  tableMain.appendChild(tableData);
};


header('th');
for (var h = 0; h < customers.length; h++) {
  header('th', customers[h]);
}
header('th', 'Daily Location Total');


Stores.prototype.renderData = function () {
  header('tr');
  for (var i = 0; i < customers.length; i++) {
    if (i === 0) {
      header('td', this.name);
    }
    header('td', this.soldCookiesPerHour[i]);
  }
  header('td', this.totalOfCookies[i]);
};

for (var calculate = 0; calculate < locations.length; calculate++) {
  locations[calculate].cookiesPerHour();
  locations[calculate].renderData();
}

var footer = function () {
  var tableMain = document.getElementById('foot');
  var tableData = document.createElement('td');
  tableData.textContent = 'Totals';
  tableMain.appendChild(tableData);

  var allTotal = 0;
  for (var t = 0; t < customers.length; t++) {
    var poop = 0;
    for (var p = 0; p < locations.length; p++) {
      cookiesArray[t] = locations[p].soldCookiesPerHour[t]
      poop += cookiesArray[t]
    }
    allTotal += poop;
    var tableMain = document.getElementById('foot')
    var tableData = document.createElement('tfoot')
    var tableData = document.createElement('td')
    tableData.textContent = poop;
    tableMain.appendChild(tableData);
  }
  var tableData = document.createElement('td');
  tableData.textContent = allTotal;
  tableMain.appendChild(tableData);
}

footer();

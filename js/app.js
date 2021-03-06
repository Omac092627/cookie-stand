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
  locations.push(this);
};


new Stores('Seattle', 23, 65, 6.3, [], 0);
new Stores('Tokyo', 3, 24, 1.2, [], 0);
new Stores('Dubai', 11, 27, 3.7, [], 0);
new Stores('Paris', 20, 38, 2.3, [], 0);
new Stores('Lima', 2, 16, 4.6, [], 0);



Stores.prototype.random = function () {
  for (var h = 0; h < locations.length; h++) {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min) + this.min;
  }
}

Stores.prototype.cookiesPerHour = function () {
  for (var c = 0; c < customers.length; c++) {
    this.soldCookiesPerHour[c] = Math.round(this.soldCookiesPerHour[c] = this.averageCookieSales * this.random());
    this.totalOfCookies += this.soldCookiesPerHour[c];

  }
}




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
  header('td', this.totalOfCookies);
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
    var hourly = 0;
    for (var p = 0; p < locations.length; p++) {
      cookiesArray[t] = locations[p].soldCookiesPerHour[t]
      hourly += cookiesArray[t]
    }

    allTotal += hourly;
    var hourlyData = document.createElement('td');
    hourlyData.textContent = hourly;
    tableMain.appendChild(hourlyData);
  }

  var totalData = document.createElement('td');
  totalData.textContent = allTotal;
  tableMain.appendChild(totalData);

}

footer();



var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {

  e.preventDefault();

  var name = e.target.storeName.value;
  var mini = e.target.minimumCookies.value;
  var max = e.target.maximumCookies.value;
  var average = e.target.avgCookies.value;
  var [] = e.target.soldCookies.value;

  e.target.storeName.value = null;
  e.target.minimumCookies.value = parseInt(e.target.minimumCookies.values);
  e.target.maximumCookies.value = parseInt(e.target.maximumCookies.value);
  e.target.avgCookies.value = parseInt(e.target.avgCookies);
  e.target.soldCookies.value = parseInt(e.target.soldCookies.value);

  new Stores(name, mini, max, average, [], 0);

  console.log(new Stores(name, mini, max, average, [], 0))

  e.target.minimumCookies.value = null;
  e.target.maximumCookies.value = null;
  e.target.avgCookies.value = null;
  e.target.soldCookies.value = null;




  for (var dude = locations.length - 1; dude > locations.length - 2; dude--) {
    locations[dude].cookiesPerHour();
    locations[dude].renderData();

  }
  // var elem = document.querySelector('td');
  // elem.parentNode.removeChild(elem);




}

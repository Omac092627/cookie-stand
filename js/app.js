'use strict'

var customers = ['6am: ', ' 7am: ', ' 8am: ', ' 9am: ', ' 10am: ', ' 11am: ', ' 12pm: ', ' 1pm: ', ' 2pm: ', ' 3pm: ', ' 4pm: ', ' 5pm: ', ' 6pm: ', ' 7pm: '];

var Stores1 = []

function Stores(name, min, max, averageCookieSales) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookieSales = averageCookieSales;
  Stores1.push(this)
};

Stores.prototype.random = function random() {
  var newArray = [];
  var totalOfCookies = 0;
  for (var i = 0; i < customers.length; i++) {
    var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
    totalOfCookies = totalOfCookies + random;
    newArray.push(`${customers[i]}  ${random}  cookies`);
  }
  newArray.push(` Total: ${totalOfCookies} cookies`)
  return newArray;
};

Stores.prototype.render = function () {
  var firstElement = document.getElementById('store1');
  var listElement1 = document.createElement('td');
  listElement1.textContent = this.random();
  firstElement.appendChild(listElement1);

  var secondElement = document.getElementById('store2');
  var listElement2 = document.createElement('td');
  listElement2.textContent = this.random();
  secondElement.appendChild(listElement2);

  var thirdElement = document.getElementById('store3');
  var listElement3 = document.createElement('td');
  listElement3.textContent = this.random();
  thirdElement.appendChild(listElement3);

  var fourthElement = document.getElementById('store4');
  var listElement4 = document.createElement('td');
  listElement4.textContent = this.random();
  fourthElement.appendChild(listElement4);

  var fifthElement = document.getElementById('store5');
  var listElement5 = document.createElement('td');
  listElement5.textContent = this.random();
  fifthElement.appendChild(listElement5);
}



new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 27, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);


//Stores1[0].random();
Stores1[0].render();















/*


var store1 = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageCookieSales: 6.3,

  seattle: function getRandomInt() {
    var newArray = [];
    var totalOfCookies = 0;

    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${customers[i]}  ${random}  cookies`);
    }
    newArray.push(` Total: ${totalOfCookies} cookies`)
    return newArray;
  },

  render: function renderToPage() {
    var seattleElement = document.getElementById('store1');
    var listElement1 = document.createElement('li');
    listElement1.textContent = store1.seattle();
    seattleElement.appendChild(listElement1);
  }
};


store1.render();


var store2 = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageCookieSales: 1.2,

  tokyo: function getRandomInt() {
    var newArray = [];
    var totalOfCookies = 0;

    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${customers[i]}  ${random}  cookies`);
    }
    newArray.push(` Total: ${totalOfCookies} cookies`)
    return newArray;
  },
  render: function renderToPage() {
    var tokyoElement = document.getElementById('store2');
    var listElement2 = document.createElement('li');
    listElement2.textContent = store2.tokyo();
    tokyoElement.appendChild(listElement2);
  }
};




store2.render();


var store3 = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageCookieSales: 3.7,

  dubai: function getRandomInt() {
    var newArray = [];
    var totalOfCookies = 0;

    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${customers[i]}  ${random}  cookies`);
    }
    newArray.push(` Total: ${totalOfCookies} cookies`)
    return newArray;
  },
  render: function renderToPage() {
    var dubaiElement = document.getElementById('store3');
    var listElement3 = document.createElement('li');
    listElement3.textContent = store3.dubai();
    dubaiElement.appendChild(listElement3);
  }
};



store3.render();



var store4 = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageCookieSales: 2.3,

  paris: function getRandomInt() {
    var newArray = [];
    var totalOfCookies = 0;

    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${customers[i]}  ${random}  cookies`);
    }
    newArray.push(` Total: ${totalOfCookies} cookies`)
    return newArray;
  },
  render: function renderToPage() {
    var parisElement = document.getElementById('store4');
    var listElement4 = document.createElement('li');
    listElement4.textContent = store4.paris();
    parisElement.appendChild(listElement4);
  }
};



store4.render();


var store5 = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageCookieSales: 4.6,

  lima: function getRandomInt() {
    var newArray = [];
    var totalOfCookies = 0;

    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales);
      totalOfCookies = totalOfCookies + random;
      newArray.push(`${customers[i]}  ${random}  cookies`);
    }
    newArray.push(` Total: ${totalOfCookies} cookies`)
    return newArray;
  },
  render: function renderToPage() {
    var limaElement = document.getElementById('store5');
    var listElement5 = document.createElement('li');
    listElement5.textContent = store5.lima();
    limaElement.appendChild(listElement5);
  }
};



store5.render();


*/

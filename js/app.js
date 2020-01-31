'use strict'

var customers = ['6am: ', ' 7am: ', ' 8am: ', ' 9am: ', ' 10am: ', ' 11am: ', ' 12pm: ', ' 1pm: ', ' 2pm: ', ' 3pm: ', ' 4pm: ', ' 5pm: ', ' 6pm: ', ' 7pm: '];


var total = {
  name: 'Total: ',
  absoluteTotal: 0,

};


var store1 = {
  name: 'Seattle',
  min: 23,
  max: 65,
  averageCookieSales: 6.3,

  Seattle: function getRandomInt() {
    var newArray = [];
    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales) + ' cookies';

      newArray.push(customers[i] + random)
    }
    return newArray;
  }
};


var seattleElement = document.getElementById('store1');
var listElement1 = document.createElement('li');
var listElementTotal1 = document.createElement('li')
listElementTotal1.textContent = total.name;
listElement1.textContent = store1.Seattle();
seattleElement.appendChild(listElement1);
seattleElement.appendChild(listElementTotal1);

store1.Seattle();
console.log(store1.Seattle());

/*
var store2 = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  averageCookieSales: 1.2,

  Tokyo: function getRandomInt() {
    var newArray = [];
    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales) + ' cookies';

      newArray.push(customers[i] + random)
    }
    return newArray;
  }
};
var tokyoElement = document.getElementById('store2');
var listElement2 = document.createElement('li');
listElement2.textContent = store2.Tokyo();
tokyoElement.appendChild(listElement2);

store2.Tokyo();
console.log(store2.Tokyo());


var store3 = {
  name: 'Dubai',
  min: 11,
  max: 38,
  averageCookieSales: 3.7,

  Dubai: function getRandomInt() {
    var newArray = [];
    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales) + ' cookies';

      newArray.push(customers[i] + random)
    }
    return newArray;
  }
};

var dubaiElement = document.getElementById('store3');
var listElement3 = document.createElement('li');
listElement3.textContent = store3.Dubai();
dubaiElement.appendChild(listElement3);

store3.Dubai();
console.log(store3.Dubai());



var store4 = {
  name: 'Paris',
  min: 20,
  max: 38,
  averageCookieSales: 2.3,

  Paris: function getRandomInt() {
    var newArray = [];
    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales) + ' cookies';

      newArray.push(customers[i] + random)
    }
    return newArray;
  }
};

var parisElement = document.getElementById('store4');
var listElement4 = document.createElement('li');
listElement4.textContent = store4.Paris();
parisElement.appendChild(listElement4);


store4.Paris();
console.log(store4.Paris());


var store5 = {
  name: 'Lima',
  min: 2,
  max: 16,
  averageCookieSales: 4.6,

  Lima: function getRandomInt() {
    var newArray = [];
    for (var i = 0; i < customers.length; i++) {
      var random = Math.round(Math.floor(Math.random() * (this.max - this.min + 1) + this.min) * this.averageCookieSales) + ' cookies';

      newArray.push(customers[i] + random)
    }
    return newArray;
  }
};

var limaElement = document.getElementById('store5');
var listElement5 = document.createElement('li');
listElement5.textContent = store5.Lima();
limaElement.appendChild(listElement5);

store5.Lima();
console.log(store5.Lima());
*/
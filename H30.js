'use strict';

// Створити сутність людина

class Human {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} (${this.age})`
  }
}

// // Створити сутність автомобіль

class Car {
  brand;
  model;
  year;
  license;
  owner;

  constructor(brand, model, year, license) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license = license;
  }

  addOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
      return;
    }
    this.owner = null;
  }
  
  showInfo() {
    if (this.owner !== null) {
    console.log(
      `Brand: ${this.brand}
      \nModel: ${this.model}
      \nYear: ${this.year}
      \nLicense: ${this.license}
      \nOwner ${this.owner.getInfo()}`
    );
    return;
    }
  }
}

//демонстрації

let hundai = new Car("Mitsubishi", "Lancer", 2006, "gray");
let volkswagen = new Car("Volkswagen", "Passat", 2009, "black");

let odin = new Human("Odin", 17);
let loki = new Human("Loki", 41);

hundai.addOwner(odin);
console.log(hundai);

volkswagen.addOwner(loki);
console.log(volkswagen);

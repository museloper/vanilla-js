function sayHello() {
  console.log("Hello!");
}

sayHello();

function sayHello2(name, age) {
  console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello2("museloper", 32);

function plus(x, y) {
  console.log(x + y);
}

plus(5, 3);

function divide(x, y) {
  console.log(a / b);
}

divide(5, 3);

const player = {
  name: "museloper",
  sayHello: function (name) {
    console.log("Hello! " + name + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("googlee");

const calculator = {
  addition: function (a, b) {
    console.log(a + b);
  },

  subtraction: function (a, b) {
    console.log(a - b);
  },

  multiplication: function (a, b) {
    console.log(a * b);
  },

  division: function (a, b) {
    console.log(a / b);
  },
};

calculator.addition(5, 3);
calculator.subtraction(5, 3);
calculator.multiplication(5, 3);
calculator.division(5, 3);

const calculator2 = {
  addition: function (a, b) {
    return a + b;
  },

  subtraction: function (a, b) {
    return a - b;
  },

  multiplication: function (a, b) {
    return a * b;
  },

  division: function (a, b) {
    return a / b;
  },
};

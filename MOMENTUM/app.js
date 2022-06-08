// Arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

// Get item from array
console.log(daysOfWeek[4]);

// Add something to the array
daysOfWeek.push("sun");

// Objects
const player = {
  name: "museloper",
  points: 100,
};

console.log(player);

// Get value from object
console.log(player.name);
console.log(player["name"]);

// Update something
player.points += 200;
console.log(player);

// Add something to the object
player.type = "Wizard";
console.log(player);

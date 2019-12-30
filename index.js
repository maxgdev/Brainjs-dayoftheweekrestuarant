// Example from "Scrimba - Neural networks in JavaScript"
// Brain.js - Day of the Week Restaurant
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
const stats = net.train(trainingData);

console.log(stats);
console.log(net.run({ 'Monday': 1 }));

function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));


// Result: Console.log output
// index.js:29 ==> console.log(stats)
// Object
// error: 0.004995679701258234
// iterations: 1381
// __proto__: Object
//
// index.js:30 ==> console.log(net.run({ 'Monday': 1 }))
// Object
// Brilliant Yellow Corral: 0.9127914905548096
// Penny’s: 0.07530900835990906
// Right Coast Wings: 0.04079578071832657
// The Delusion Last Railway Car: 0.019983559846878052
// Fun Day Inn: 0.00004614455974660814
// JHOP: 0.0012990254908800125
// Owls: 0.051428116858005524
// __proto__: Object
//
// index.js:46 Brilliant Yellow Corral
// index.js:47 Penny’s
// index.js:48 Right Coast Wings
// index.js:49 The Delusion Last Railway Car
// index.js:50 Fun Day Inn
// index.js:51 JHOP
// index.js:52 Owls
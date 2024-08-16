const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
const validWords = ["metric", "imperial", "bob", "kevin"];

function showUserFactors(type, units, value) {
    let results = {};
    let measurement;
    let system;
    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
    for (let planet in alienGravityFactors) {
        results[planet] = parseFloat((alienGravityFactors[planet] * value).toFixed(2));
    }
    switch (units) {
        case "metric":
            system = "metric"
            break;
        case "imperial":
            system = "imperial"
            break;
    }
    switch (type) {
        case "jump":
            if (system = "metric") { measurement = "cm" } else { measurement = "in" }
            break;
        case "weight":
            if (system = "metric") { measurement = "kg" } else { measurement = "lb" }
            break;
        case "pushups":
            measurement = " pushups"
            break;
        default:
            measurement = " units"
            break;
    }
    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]}${measurement}`);
    }
}
function getUserInput() {
    console.log("Metric or Imperial measurement?");
    let units = prompt(">> ").trim().toLowerCase();
    console.log("What type of measurement would you like to use? (weight, jump, or pushups)");
    let type = prompt(">> ").trim().toLowerCase();
    console.log(`What is your ${type} on earth?`);
    let value = prompt(">> ").trim().toLowerCase();
    console.log(showUserFactors(type, units, value));
}


global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;
const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
const validSystems = ["metric", "imperial"];

function showUserFactors(type, value) {
    let results = {};
    let measurement;
    let system;
    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
    for (let planet in alienGravityFactors) {
        results[planet] = parseFloat((alienGravityFactors[planet] * value).toFixed(2));
    }
    switch (type) {
        case "jump":
            measurement = "cm"
            break;
        case "weight":
            measurement = "kg"
            break;
        case "pushups":
            measurement = " pushups"
        default:
            measurement = " units"
    }
    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]}${measurement}`);
    }
}
function getUserInput() {
    console.log("What type of measurement would you like to use? (weight, jump, or pushups)");
    let type = prompt(">> ").trim().toLowerCase();
    console.log("Metric or Imperial measurement");
    let system = prompt(">> ").trim().toLowerCase();
    console.log(`What is your ${type} on earth?`);
    let value = prompt(">> ").trim().toLowerCase();
    console.log(showUserFactors(type, value));
}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;
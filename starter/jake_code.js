const prompt = require('prompt-sync')();
const earthGravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
const validWords = ["metric", "imperial", "bob", "kevin"];

function showUserFactors(factorType, factorUnit, factorValue) {
    let results = {};
    let measurement;
    let system;
    for (let planet in earthGravityFactors) {
        results[planet] = parseFloat((earthGravityFactors[planet] * factorValue).toFixed(2));
    }
    for (let planet in alienGravityFactors) {
        results[planet] = parseFloat((alienGravityFactors[planet] * factorValue).toFixed(2));
    }
    switch (factorUnit) {
        case "1":
            system = "metric";
            break;
        case "2":
            system = "imperial";
            break;
    }
    switch (factorType) {
        case "jump":
            for (i = 0; i < validWords.length; i++) {
                if (system == "metric") {
                    measurement = "cm";
                    break;
                } else if (measurement == "imperial") {
                    measurement = "in";
                    break;
                }
            }
            break;
        case "weight":
            for (i = 0; i < validWords.length; i++) {
                if (system == "metric") {
                    measurement = "kg";
                    break;
                } else if (measurement == "imperial") {
                    measurement = "lb";
                    break;
                }
            }
            break;
        case "pushups":
            measurement = " pushups";
            break;
        default:
            measurement = " units";
            break;
    }
    for (let planet in results) {
        console.log(`your ${factorType} on ${planet} is ${results[planet]}${measurement}`);
    }
}
function getUserInput() {
    console.log("Metric (1) or Imperial (2) measurement?");
    let factorUnit = prompt(">> ").trim().toLowerCase();
    console.log("What type of measurement would you like to use? (weight, jump, or pushups)");
    let factorType = prompt(">> ").trim().toLowerCase();
    console.log(`What is your ${factorType} on earth?`);
    let factorValue = prompt(">> ").trim().toLowerCase();
    console.log(showUserFactors(factorType, factorUnit, factorValue));
}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;

getUserInput();
const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
const validSystem = ["metric", "imperial", "bob","kevin"];
function showUserFactors(type, system, value) {
    let results = {};
    let measurement;
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
        default:
            measurement = "units"
    }
    
    switch (system) {
        case "pound":
            measurement ="lbs"
            break;
            
            default:
                measurement = "units";
    }
    switch (units) {
        case ""

    }
    
    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]}${measurement}`);
    }
}
function getUserInput() {
    console.log("Metric or Imperial");
    
    let system = prompt(">> ");
    console.log("What type of measurement would you like to use? (weight or jump)");
    let type = prompt(">> ");
    console.log(`What is your ${type} on earth?`);
    let value = prompt(">> ");
   


    console.log(showUserFactors(type, value));
}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;
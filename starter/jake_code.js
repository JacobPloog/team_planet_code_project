// jake code

const prompt = require('prompt-sync')();
const earthGravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(factorType, factorPlanets, factorSystem, factorValue) {
    let results = {};
    for (let planet in results) {
        console.log(`your ${factorType} on ${planet} is ${results[planet]}${measurement}`);
    }
    console.log("Measure again? (y or n)");
    let input = prompt(">>").trim().toLowerCase();
    if (input === 'y') {
        getUserInput();
    }
}


function getUserInput() {
    let factorSystem = "repetitions";
    let factorType;
    let factorValue;
    let factorPlanets;
    while (true) {
        if (factorType !== "pushups") {
            console.log("Metric (1) or Imperial (2) measurement?");
            factorSystem = prompt(">> ").trim().toLowerCase();
        }
        if (!isNaN(factorSystem) && 3 > factorSystem < 0) {
            switch (factorSystem) {
                case "1":
                    factorSystem = "metric"
                    break;
                case "2":
                    factorSystem = "imperial";
                    break;
                default:
                    break;
            }
            break;
        } else {
            console.error("WRONG");
        }
    }
    let factorUnit = "repetitions";
    if (factorsystem === "metric") {
        if (factorType === "weight") {
            factorUnit = "kg"
        } else if (factorType === "jump") {
            factorUnit = "cm"
        }
    } else if (factorSystem === "imperial") {
        if (factorType === "weight") {
            factorUnit = "lbs";
        } else if (factorType === "jump") {
            factorUnit = "in";
        }
    }
    while (true) {
        console.log("What type of measurement would you like to use? (weight, jump, or pushups)");
        factorType = prompt(">> ").trim().toLowerCase();
        break;
    }
    while (true) {
        console.log(`What is your ${factorType} on earth?`);
        factorValue = prompt(">> ").trim().toLowerCase();
        break;
    }
    while (true) {
        console.log(`What solar system would you like to use? (earth or alien)`);
        factorPlanets = prompt(">> ").trim().toLowerCase();
        if (factorPlanets === "earth") {
            for (let planet in earthGravityFactors) {
                results[planet] = parseFloat((earthGravityFactors[planet] * factorValue).toFixed(2));
            }
        } else if (factorPlanets === "alien") {
            for (let planet in alienGravityFactors) {
                results[planet] = parseFloat((alienGravityFactors[planet] * factorValue).toFixed(2));
            }
        }
        break;
    }
    console.log(showUserFactors(factorType, factorPlanets, factorSystem, factorValue));
}

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;

getUserInput();
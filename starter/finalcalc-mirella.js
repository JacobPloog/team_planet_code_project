const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactor.js');

function showUserFactors(type, value, planets, unit) {
    let results = {};
    //declare a variable to holds a until of measurment
    let measurment;
    let unit;
    let value;
    let planets;

    //iterate gravity Factors and assign to resultd
    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
    for (let planet in alienFactors) {
        results[planet] = parseFloat((alienGravityFactors[planet] * value).toFixed(2));
    }
    switch (unit) { 
        case "metric":
            break;
        case "imperial":
            break;
    }
    switch (type) {
        case "jump":
            if {system }{ measurment = "cm" };
            break;
        case "weight":
            meauserment = "kg";
            break;
        case "pushups":
            
        //other cases
        default:
            measurment = "units";
    }
    //Iterate over the results and log each one 
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurment}`);

    }
    switch ()

}

// function userWorldInput() {
//     console.log('Enter the world you want "earth " or "alien" ')

// }

function getUserInput() {
    //prompt them for the type
    console.log("Enter chosen solar system ('solar system' or 'alien solar system')");
    const validWords = ['jump', 'weight', 'pushups'];
    while (true) {
        console.log("enter measurment type ('jump' 'weight' or 'pushups') ");
        const type = prompt(">>").trim().toLowerCase();
        let match = false;
        for (let i = 0; i < validWords.length - 1; i++) {
            if (type === validWords[i]) {
                match = true;
            }
        }
        if (match) {
            break;
        } else {
            console.log('wrong information please retype');
        }
    };
    // console.log("Enter your measurment type ('jump' 'pushup' or 'weight')");
    // const type = prompt(">>");
    console.log("Enter the valus('as a number')");
    const value = prompt(">>").trim().toLowerCase();;
    console.log("Would you rather use ('metric' or 'imperial')");
    const system = prompt(">>").trim().toLowerCase();;
    consolse.log("Would you rather use ('distance' 'mass') ");
    const measureSystem = prompt(">>").trim().toLowerCase();;
    showUserFactors(type, value);

}
getUserInput();
global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;

// console.log(showUserFactors);
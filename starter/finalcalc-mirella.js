const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactor.js');

function showUserFactors(type, value) {
    let results = {};
    //declare a variable to holds a until of measurment
    let measurment;
    
    //iterate gravity Factors and assign to resultd
    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
    switch (type) {
        case "jump":
            measurment = "cm";
            break;
        case "weight":
            meauserment = "kg";
            break;
        //other cases
        default:
            measurment = "units";
        }
    //Iterate over the results and log each one 
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurment}`);
        
    }
    
}

function userWorldInput() {
    console.log('Enter the world you want "earth " or "alien" ')
     
}

function getUserInput() {
    const validWords = ['jump', 'weight', 'pushups'];
    while (true) { 
        console.log("enter 'jump' 'weight' or 'pushups' ");
        
    };

    //prompt them for the type
    console.log("Enter your measurment type ('jump' or 'weight')");
    const type = prompt(">>");
    console.log("Enter the valus('as a number')");
    const value = prompt(">>");
    //store their input in a variable

    //prompt them for the value
    //store their input ina variable
    showUserFactors(type, value);
    //call the showUserFunction and 
    //pass the input variable in parameters
}
getUserInput();
global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;

// console.log(showUserFactors);
const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserfactors(type, value){
    let results ={};
    let measurement;
    for (let planet in gravityFactors){
        results[planet] = parseFloat((gravityFactors[planet]*value).toFixed(2));
    };
    switch(type){
        case "jump":
            measurement = "cm"
            break;

        case "weight":
            measurement = "lb";
            measurement = "kg"
            break;
            default:
                measurement="units"
                break;
    };
};
console.log();

global.showUserfactors = showUserfactors;
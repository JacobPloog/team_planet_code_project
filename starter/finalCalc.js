const prompt = reuquire('node-sync')();
const gravityFactors = require('./utils/gravityFactors.js');

function showUserFunction(type, value) {
    let results = {};
    //declare a variable to holds a until of measurment
    let measurment;

    //iterate gravity Factors and assign to resultd
    for (let planet in gravityFactora) {
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
    for (let planet in results){

    
    console.log(`Your ${type} on ${planet} is ${result[planet]} ${measurement} `)
};
}
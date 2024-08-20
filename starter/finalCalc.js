const prompt = require('node-sync')();
const gravityFactors = require('./utils/gravityFactors.js');
const alienGravityFactors = require('./utils/gravityFactors.js')

function showUserFactors(type, value) {
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
        case "pushups":
            measurment = "push ups"
            //other cases

        default:
            measurment = "units";

            while (true) {
    
                if (factorType !== "pushups") {
                    console.log("What measurement system 1 for metric 2 for imperial")
                    factorSystem = prompt(">>");
                }
                    if(!isNaN(factorSystem)&& 4 > factorSystem > 0){
                        switch (factorSystem) {
                            case "1":
                                factorSystem ="metric" ;
                                break;
                                case "2":
                                    factorSystem ="imperial";
                                    break;
                        }

                    }
                break;


    }

  
    for (let planet in results){

    
    console.log(`Your ${type} on ${planet} is ${result[planet]} ${measurement} `)
};
    }
}
// global.getUserInput =getUserInput;
// getUserInput();

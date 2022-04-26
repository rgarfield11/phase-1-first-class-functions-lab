// Code your solution in this file!

// first 2 drivers
const returnFirstTwoDrivers = (x) => x.slice(0,2);

// last 2 drivers
const returnLastTwoDrivers = (x) => x.slice(x.length - 2);

// seclecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// fare multiplier
const createFareMultiplier = x => {
    return function(fare) {
        return fare * x
    };
};

// fare 2x-er
const fareDoubler = createFareMultiplier(2);

// fare 3x-er
const fareTripler = createFareMultiplier(3);

//diff drivers
const selectDifferentDrivers = (arrayOfDrivers, cbFunction) => {
    return cbFunction(arrayOfDrivers)
};


//const selectDifferentDrivers = ([], returnLastTwoDrivers);
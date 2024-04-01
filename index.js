// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = array => {
    return array.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (fare) {return fare * num};
};

const fareDoubler = (num) => {return num * 2};

const fareTripler = (num) => {return num * 3};

function selectDifferentDrivers(arrayOfDrivers, functions) {
    return functions(arrayOfDrivers);
}
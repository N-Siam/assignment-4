function cubeNumber(n) {
    if (typeof n !== 'number') {
        return "Error!! Please provide a valid input (number).";
    }
    else{
        return n*n*n;
    }
}



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Error!! Please provide a valid input (string).";
    }

    if (string1.toLowerCase().includes(string2.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}



function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Error!! Please provide a valid input (array).";
    }
    else {
        if (arr[0] === arr[1]) {
            return "equal";
        }
        else {
            return arr.sort((a, b) => b - a);
        }
    }
}



function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "Error!! Please provide a valid input (object).";
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + ',' + house + ',' + society + ',';
    }
}



function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0 || typeof totalDue !== "number" || totalDue <= 0) {
        return "Error!! Please provide a valid input.";
    }
    else {
        let totalChange = 0;
        for (let value of changeArray) {
            totalChange += value;
        }
        return totalChange >= totalDue;
    }
}




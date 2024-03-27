const sumAll = function(firstInt, secondInt) {
    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt))
        return "ERROR"
    if (firstInt < 0 || secondInt < 0)
        return "ERROR"
    if (firstInt > secondInt)
        [firstInt, secondInt] = [secondInt, firstInt]
    let sum = 0;
    for (let first = firstInt; first <= secondInt; first++)
        sum += first;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const findTheOldest = function(people) {
    let oldestAge =0;
    let oldest;
    people.forEach(element => {
        let currentAge=0;
        if(!element.yearOfDeath)
        {
            currentAge = new Date().getFullYear() - element.yearOfBirth;
        }
        else{
            currentAge = element.yearOfDeath - element.yearOfBirth;
        }

        if(oldestAge < currentAge)
        {
            oldestAge =currentAge;
            oldest = element;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

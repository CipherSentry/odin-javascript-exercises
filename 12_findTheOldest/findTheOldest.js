const findTheOldest = function(people) {

    const date = new Date();
    const year = date.getFullYear();

    let oldest ={
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0
    };
    let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

    for (person of people) {
       let age = 0;

       if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
       }else {
        age = year - person.yearOfBirth;
       }
       
       if (age > oldestAge) {
        oldestAge = age;
        oldest = person;
       }

    };

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

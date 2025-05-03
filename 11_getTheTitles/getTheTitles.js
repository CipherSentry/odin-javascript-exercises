const getTheTitles = function(objArray) {

    let titles = [];

    for (obj of objArray) {
        titles.push(obj.title);
    };

    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;

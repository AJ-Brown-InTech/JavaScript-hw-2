
let sallysAge = 10;
let jonsAge = 9;
let bobsAge = 12;

let result = [];

let largestAge = 0;

let people = [jonsAge,sallysAge, bobsAge]

for (let i = 0; i < people.length; i++) {
    let num = people[i];
    
    if (largestAge > num) {
    largestAge = num;
    }
    result.push(largestAge);
//testing git
//test 2
    }

// write the code to figure out what the largest age
// is among the three values above.
// write the answer to the console.
// expect the console output to be
// 12

// hint: you will need to use a variable to 
// track the largestAge.




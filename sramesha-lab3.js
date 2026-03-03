// Supritha Ramesha
// ITMD 541-01 Graduate Student

// Exercise #1
function minMaxAverage(numbers) {

    let totalNumbers = numbers.length;

    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }

        sum += numbers[i];
    }

    let average = sum / totalNumbers;
    console.log("Total Numbers: " + totalNumbers +
        ", Min Value: " + min +
        ", Max Value: " + max +
        ", Average: " + average);
}
// Test Cases for Exercise #1
console.log("------ Exercise #1 ------");
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([100, 200, 50, 75, 25]);



// Exercise #2
function countVowels(word) {

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {

        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}
// Test Cases for Exercise #2
console.log("------ Exercise #2 ------");
console.log("Winter: " + countVowels("Winter") + " vowels");
console.log("Programming: " + countVowels("Programming") + " vowels");
console.log("Supritha: " + countVowels("Supritha") + " vowels");


// Exercise #3
function sortNumbers(numbers) {

    let sortedArray = numbers.slice().sort(function(a, b) {
        return a - b;
    });

    return sortedArray;
}
// Test Cases for Exercise #3
console.log("------ Exercise #3 ------");
let arr1 = [9, 4, 6, 2];
console.log("Original Array: " + arr1 + 
            " Sorted Array: " + sortNumbers(arr1));

let arr2 = [100, 20, 5, 75, 30];
console.log("Original Array: " + arr2 + 
            " Sorted Array: " + sortNumbers(arr2));

let arr3 = [8, 3, 1, 9, 0];
console.log("Original Array: " + arr3 + 
            " Sorted Array: " + sortNumbers(arr3));



// Exercise #4
function celsiusToFahrenheit(celsius) {

    let numericCelsius = Number(celsius);

    let fahrenheit = (numericCelsius * 9/5) + 32;

    console.log(numericCelsius.toFixed(1) + 
        " Celsius = " + 
        fahrenheit.toFixed(1) + 
        " Fahrenheit");
}
// Test Cases for Exercise #4
console.log("------ Exercise #4 ------");
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);

celsiusToFahrenheit("35");
celsiusToFahrenheit("12");



// Exercise #5
function sortPeopleByAge(people) {

    let sortedPeople = people.slice().sort(function(a, b) {
        return a.age - b.age;
    });

    let introductions = [];

    for (let i = 0; i < sortedPeople.length; i++) {

        let person = sortedPeople[i];

        introductions.push(
            person.name + " is " + 
            person.age + 
            " and from " + 
            person.city
        );
    }

    return introductions;
}
//test case 1
console.log("------ Exercise #5 ------");
console.log("-Test case 1 -");
let people1 = [
    {name: 'John', age: 25, city: 'Chicago'},
    {name: 'Anna', age: 20, city: 'New York'},
    {name: 'Mike', age: 30, city: 'Dallas'},
    {name: 'Sara', age: 22, city: 'Boston'},
    {name: 'Tom', age: 28, city: 'Seattle'}
];
console.log(sortPeopleByAge(people1));

//test case 2
console.log("-Test case 2 -");
let people2 = [
    {name: 'Lily', age: 19, city: 'Miami'},
    {name: 'David', age: 35, city: 'Denver'},
    {name: 'Chris', age: 27, city: 'Austin'},
    {name: 'Emma', age: 23, city: 'San Diego'},
    {name: 'Ryan', age: 31, city: 'Phoenix'}
];
console.log(sortPeopleByAge(people2));
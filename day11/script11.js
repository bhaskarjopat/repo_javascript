// // 'use strict'; // it do not allow spell mistakes

// // let vote = false;
// // const novote = true;

// // if (novote) vote = true;
// // if (vote) console.log("you can vote");



// let vote = false;
// const novote = true;

// if (novote) vte = true;
// if (vote) console.log("you can vote");











// // //topic = function 
// // function function1() {
// //     console.log("Function1 is running~~~~~~~~~~~~~");
// //     a = 19-1
// //     console.log(a);
// // }

// // //calling or invoking or running function
// // function1();
// // function1();
// // function1();
// // function1();


// // function fruitjuice(apple, banana, orange) {
// //     // console.log(apple , banana, orange);
// //     const juice = `fruit juice = apple=${apple}, banana=${banana}, orange=${orange}`;
// //     return juice;
// // }

// // // fruitjuice(12,12,12);
// // const applejuice=fruitjuice(12,12,12);
// // console.log(applejuice);
// // const appleOrangeJuice=console.log(fruitjuice(12,12,12));


// //one more example
// // function calAge(year) {
// //     const age = 2024-year;
// //     return age;
// // }

// // this is function declaration
// function calAge1(year) {
//     return 2024-year;
// }
// const Ram = calAge1('2013');

// //this is function expression 
// const calAge2 = function (year) {
//     return 2024-year;
// }

// const Shyam = calAge2('2011');

// console.log(Ram,Shyam);


// // const Ram = calAge('2013');
// // console.log(Ram);
// // const Shyam = calAge('2011');
// // console.log(Shyam);
// // const Naam = calAge('2024');
// // console.log(Naam);
// // const Kaam = calAge('2007');
// // console.log(Kaam);













    //topic = arrow function
// this is function declaration
function calAge1(year) {
    return 2024-year;
}
const Ram = calAge1('2013');

//this is function expression 
const calAge2 = function (year) {
    return 2024-year;
}

// const calAge2 = year => 2024 - year;

const Shyam = calAge2('2011');


//Arrow function
const calAge3 = year => 2024 - year;
const sita = calAge3('2023')

console.log(Ram,Shyam,sita);

const yearRetirement = (year, firstName) => {
   const age = 2024 - year;
   const retire = 70 - age;
//    return retire;
return `${firstName} retire in ${retire} years`
} 
console.log(yearRetirement(1983, 'Bhaskar'));
console.log(yearRetirement(1980, 'Krish'));
console.log(yearRetirement(1981, 'Anmol'));


// 4 Funktioner

// 4.1 

// function foo() { 
//     console.log("test");  
// }  foo("hej"); 

// svar: Test

// let a = foo(3); 
// console.log(a); 
// function foo(i) { 
//     return i * i; 
// }   

// svar: 9

// console.log( foo(3, 5) ); 
// function foo(x, y) { 
//     return x * y; 
// }  
// svar: 15 

// let x = 2; 
// let y = 3 
// let a = foo(foo(x) + foo(y)); 
// console.log(a); 
// function foo(i) { 
//     return 5 * i; 
// } 

// svar: 125?????


// let a = 5;
// function foo(a) { 
//     a++; 
// } 
// a += 2; 
// console.log(a);  
// svar: 7

// let foo = function(i) { 
//     return 2*i*i; 
// };  
// let goo = function(x, y) 
// {  
//     return x(y); 
// };  
// let a = goo(foo, 3); 
// console.log(a); 

// svar: 18????

// 4.2

// const namnLista = {
//     namn: "Cecilia"
// }
// console.log("Hej " + namnLista.namn);

// function welcomePhrase(namn) {

//     return "Hej " + namn + "!"
// }

// console.log(welcomePhrase(namnLista.namn));

// 4.3


// let lager = myFunction[10, 20, 30];

// function myFunction(a, b, c) {
//     return a + b + c; 

// }
// const x = myFunction(10, 20, 30,);
// console.log(x);



// 4.4

// let ordString = "Hejsan";
// let result = ordString.substring(0, 3);

// console.log(result);

// 4.5

// const user = { 
//           name: 'Sam', 
//           cart: [
//                { 
//                name: "Tangentbord", 
//                price: 199, 
//                amount: 1 
//               },
//               { 
//               name: "USB-mus", 
//               price: 249, 
//               amount: 2 
//               }, 
//               {  
//             name: "Webbkamera", 
//               price: 399, 
//               amount: 1 
//               } 
//           ] 
//       }   


// let totalSum = user.cart.reduce((totalSum, { price, amount }) => {
//     return totalSum + (price * amount);
// }, 0);


// console.log(user.name + " Du är skyldig mig pengar " + totalSum + " kr, så du vet!!!");


//  4.6
let arrayOfFruits = ["Äpple", "Päron", "Banan"];

// let shortMap = arrayOfFruits;

let shortMap = [];

function shortMap2 () { 
    for (let i = 0; i < arrayOfFruits.length; i++) {
        shortMap[i] = arrayOfFruits[i].substring(0,3)
    }
}

console.log("arrayoffruits", arrayOfFruits);
// console.log("shortmap", shortMap);
console.log("shortmap2", shortMap2);


// let arrayOfFruits = ["River", "Lake", "Pond", "Sea"];

// let shortMap = [];

// for (let i = 0; i < arrayOfFruits.length; i++) {

//     shortMap[i] = arrayOfFruits[i].substring(0,3);

// }

// console.log(shortMap);


// 4.7

// const arrayOfFruits = ['äpple', 'päron', 'banan', 'grapefrukt', 'vindruva', 'lime'];

// function shortFilter(arrayOfFruits) {


// }

// console.log("arrayoffruits", arrayOfFruits);
// console.log("shortfilter" shortFilter);

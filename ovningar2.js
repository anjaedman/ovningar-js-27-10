

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


// Thomas lösningar


// const arrayOfFruits = ["Äpple", "Päron", "Banan"];

// console.log(arrayOfFruits);

// let shortMap = [];

// for (let i = 0; i < arrayOfFruits.length; i++) {

//     shortMap[i] = arrayOfFruits[i].substring(0,3);
// }

// console.log(shortMap);

// //The smarter one-liner way

// const shortMap2 = arrayOfFruits.map( str => str.substring(0, 2) );

// console.log("neewArray2 med map()-funktionen: " );

// console.log( shortMap2 )





// anjas thomas lösning

// let arrayOfFruits = ["Äpple", "Päron", "Banan"];

// let shortMap = [];

// for (let i = 0; i < arrayOfFruits.length; i++) {

//     shortMap[i] = arrayOfFruits[i].substring(0,3);
// }

// console.log(shortMap);



// joakims lösning

// const fruits = ['äpple', 'päron', 'banan']
// const modifiedArray = shortMap(fruits)
// console.log("modified array:: ", modifiedArray)
// function shortMap(arr){
//   const tempArray = []
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     tempArray.push(`${element}`.substring(0, 3))
//   }
//   return tempArray
// }

// anjas sista lösning

// const arrayOfFruits = ['äpple', 'päron', 'banan'];
// const modifiedArray = shortMap(arrayOfFruits);  

// function shortMap(arr){
//     const tempArray = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         tempArray.push(`${element}`.substring(0, 3)) 
//     }
//     return tempArray
// }
// console.log(modifiedArray);   




// 4.7 Skriv en funktion med namnet "shortFilter". 
// Den ska ta en array med strängar och returnera en ny array. 
// Den nya arrayen ska innehålla alla strängar från den gamla som är kortare än 7 tecken. 
// Exempel array: ['äpple', 'päron', 'banan', 'grapefrukt', 'vindruva' 'lime'] 
// (Grapefrukt och vindruva är för långa och ska inte vara med i den nya arrayen.)


const fruits = ['äpple', 'päron', 'banan', 'grapefrukt', 'vindruva', 'lime'];

console.log("fruits::", fruits);

const ihop = shortFilter(fruits);

function shortFilter(fruits) {
    const tempArray = []
    for (let index = 0; index < fruits.length; index++) {
        const element = fruits[index];
        tempArray.push(`${element}` .match(>= 7)) 
    }
    return tempArray
}

console.log("ihop::", ihop);





// const fruits = ['äpple', 'päron', 'banan', 'grapefrukt', 'vindruva', 'lime'];

// const modifiedArray = shortFilter(fruits);  

// function shortFilter () {
//     const tempArray =[]
//     for (let index = 0; index < fruits.length; index++) {
//         const element = fruits[index];
//         tempArray.push(`${element}`.filter( >= 7 ))
    
//     }   
//      return tempArray
// }

// console.log(modifiedArray);   



// function shortFilter(arr){
//     const tempArray = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         tempArray.push(`${element}`.substring(0, 3)) 
//     }
//     return element >= 7;
// }
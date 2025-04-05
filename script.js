// //Call Stack

// function hello() {
//     console.log("Inisde hello function");
//     console.log("Hello");

// }

// function demo() {
//     console.log("Inside demo");
//     hello();
//     console.log("demo ended");
// }

// console.log("Start");
// demo();
// console.log("end");


// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();


//Callback hell which is not sensible
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("1st color change");
        }, delay);
    });
}

// changeColor("orange", 1000)
//     .then(()=>{
//         console.log("2nd color change");
//         return changeColor("yellow", 1000);
//     })
//     .then(()=>{
//         console.log("3rd color change");
//         return changeColor("red", 1000);
//     })
//     .then(()=>{
//         console.log("4th color change");
//         return changeColor("green", 1000);
//     })
//     .catch(()=>{
//         console.log("Color change failed");
//     })

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000);
//     })
// })

//Solution - promises
// function saveToDB(success, faluire, data) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4)
//         success();
//     else
//         faluire();
// }

// saveToDB(
//     () => {
//         console.log("Data1 is saved");
//         saveToDB(
//             () => {
//                 console.log("Data2 is saved");
//             },
//             () => {
//                 console.log("data2 was not saved");
//             },
//             "sharma")
//     },
//     () => {
//         console.log("Data1 is not saved : weak connection")
//     },
//     "Krishna"
// );


//Promises --> Object

// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if (speed > 4) {
//             resolve("data was saved");
//         }
//         else {
//             reject("weak connection");
//         }
//     });
// };
// savetoDB("Krishna")
//     //Promise chaining
//     .then((result) => {
//         console.log("Data1 saved");
//         console.log("Success", result);
//         return savetoDB("Krishna");
//     })
//     .then((result)=>{
//         console.log("Data2 saved");
//         console.log("Success", result);
//         return savetoDB("Sharma");
//     })
//     .then((result)=>{
//         console.log("Data3 saved");
//         console.log("Success", result);
//     })
//     .catch((error) => {
//         console.log("Promise was rejected");
//     })


//Async function
async function greet() {
    // throw "Error 404";
    return "Hellow World";
}

greet()
 .then((result)=>{
    console.log("Promise was resolve");
    console.log("Data save : ", result);
 })
 .catch((err)=>{
    console.log("Promise was rejected");
    console.log("Weak connection : ", err);
 })

 //async Arrow function
let demo = async () => {
    return 5;
}
// let jsonResponse = '{"fact":"The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree.","length":94}';
// console.log(jsonResponse);
// let validRes = JSON.parse(jsonResponse);
// console.log(validRes.fact);

// let student = {
//     name : "Krishna",
//     age : 21 
// }

// let fact = "https://catfact.ninja/fact";
// fetch(fact)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data1)=>{
//         console.log("data 1 : ", data1.fact);
//         return fetch(fact);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("Data 2 : ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     })

//Using fetch with await keyword
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
        console.log(data.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(res2);
        console.log(data2.fact);
    }
    catch(e) {
        console.log("Error : ", e);
    }
    console.log("bye");
}
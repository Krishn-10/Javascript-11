//Axios

// let url = "https://catfact.ninja/fact";
// let fact = document.querySelector("p");
// let button = document.querySelector("button");


// button.addEventListener("click", 
//     async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         fact.innerText = res.data.fact;
//     }
//     catch(err) {
//         console.log("Error : ", err);
//     }
// });

// let url = "https://dog.ceo/api/breeds/image/random";
// let img = document.querySelector("img");
// let button = document.querySelector("button");

// button.addEventListener("click", 
//     async function getIamges() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         img.src = res.data.message;
//     }
//     catch(err) {
//         console.log("Error : ", err);
//     }
// });

//Sending headers using Axios

// let url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const configHeader= {headers: {Accept : "text/plain"}} 
//         let res = await axios.get(url, configHeader);
//         console.log(res.data);
//     }
//     catch(e) {
//         console.log("Error : ", e);
//     }
// }


//Query Strings Activity - University Search
let url = "http://universities.hipolabs.com/search?country=";
let list = document.querySelector("p");
let inp = document.querySelector("input");
let btn = document.querySelector("button");



btn.addEventListener("click", async () => {
    let country = inp.value;
    let colleges = await getColleges(country);
    
    show(colleges);
})

function show(colleges) {
    let list = document.querySelector("ul");
    list.innerText = "";
    for(college of colleges){
        // console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try{
        
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        console.log("Error : ", e);
        return [];
    }
}
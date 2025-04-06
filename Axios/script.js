//Axios

let url = "https://catfact.ninja/fact";
let fact = document.querySelector("p");
let button = document.querySelector("button");


button.addEventListener("click", 
    async function getFacts() {
    try {
        let res = await axios.get(url);
        fact.innerText = res.data.fact;
    }
    catch(err) {
        console.log("Error : ", err);
    }
});

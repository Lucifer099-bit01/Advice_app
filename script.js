let api = "https://api.adviceslip.com/advice";
let quoteBlock = document.querySelector(".quote");
let randomQ = document.querySelector(".dice");
let Qid = document.querySelector("#Qid");

async function Quotes(){
    let response = await fetch(api);
    console.log(response);
    let data =  await response.json();
    console.log(data);
    Qid.innerHTML = `#${data.slip.id}`;
    quoteBlock.innerHTML = `"${data.slip.advice}"`;
}

randomQ.addEventListener("click" , () => {
    Quotes();
})
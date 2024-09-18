let api = "https://api.adviceslip.com/advice";
let quoteBlock = document.querySelector(".quote");
let randomQ = document.querySelector(".dice");
let Qid = document.querySelector("#Qid");
let dice = document.querySelector("#Img-dice");


async function Quotes(){
    let response = await fetch(api);
    let data =  await response.json();
    Qid.innerHTML = `#${data.slip.id}`;
    quoteBlock.innerHTML = `"${data.slip.advice}"`;
    


}

randomQ.addEventListener("click" , () => {
    Quotes();
    dice.classList.add("diceimg");
    setTimeout(() => {
        dice.classList.remove("diceimg")
    }, 600);
})


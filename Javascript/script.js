const base_url="https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json";

const drpdwns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of drpdwns){
    for (let code in countryList){
        let newOptions = document.createElement("option");
        newOptions.innerText = code;
        newOptions.value = code;
        if(select.name === "from" && code === "USD"){
            newOptions.selected = "selected";
        }else if(select.name === "to" && code === "INR"){
            newOptions.selected = "selected";
        }
        select.append(newOptions);
    }
    select.addEventListener("change",(evt)=>{
        updateFlags(evt.target);
    });
};

const updateFlags = (element) =>{
    let code = element.value;
    let countryCode = countryList[code];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let imge = element.parentElement.querySelector("img");
    imge.src = newSrc;
};

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal + " " + fromCurr.value);
    if(amtVal === "" || amtVal< 1){
        amtVal = 1;
        amount.value = "1";
    }

    console.log(fromCurr.value,toCurr.value);
    const url1 = '${base_url}/${fromCurr.value.toLowerCase()}.json';
    // const response = await fetch(url1);
    // let data = await response.json();
    // let rate = data[toCurr.value.toLowerCase()];
    // let finatAmt = amtVal * rate;
    // msg.innerText = `${amtVal} ${fromCurr.value} = ${finatAmt} ${toCurr}`;
});
const currencyOne = document.getElementById('currency1');
const currencyTwo = document.getElementById('currency2');

const amountOne = document.getElementById('amount1');
const amountTwo = document.getElementById('amount2');

const rateEl = document.getElementById('rate');
const change = document.getElementById('change');

// fetch currency rates and update the dom
function calculate(){
    const currency1 = currencyOne.value;
    const currency2 = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/4a5f0a5e9b602b29db1dd948/latest/${currency1}`)
    .then(res => res.json())
    .then((data) => {
    //    console.log(data);
    const rate = data.conversion_rates[currency2]
    rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`

    amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

change.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});
calculate();
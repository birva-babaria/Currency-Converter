let api = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/`;

const fromDropdown = document.getElementById("from");
const toDropdown = document.getElementById("to");
const convertBtn = document.getElementById("convert");

//Create dropdown list from currency code
currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropdown.add(option);
})

currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropdown.add(option);
})

fromDropdown.value = "USD";
toDropdown.value = "INR";

let exchangeCurrencies = async () => {
    fromValue = fromDropdown.value;
    toValue = toDropdown.value;
    const amount = document.getElementById("amount").value;
    const result = document.getElementById("result");

    if (amount != 0){
        let response = await fetch(api + fromValue);
        let data = await response.json();

        let fromExchangeRate = data.conversion_rates[fromValue];
        let toExchangeRate = data.conversion_rates[toValue];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromValue} = ${convertedAmount.toFixed(2)} ${toValue}`;
    }
    else{
        alert("Please fill in the number!");
    }

}

convertBtn.addEventListener("click", exchangeCurrencies);
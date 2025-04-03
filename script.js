let api = `GET https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`;

const fromDropdown = document.getElementById("from");
const toDropdown = document.getElementById("to");

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
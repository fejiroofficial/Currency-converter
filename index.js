
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function() {
        console.log ("Service Worker is registered")
    })
    .catch(function() {
        console.log ("Service Worker Failed to Register");
    })
}

function convertCurrency() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
           // let results = data.results;
            console.log(data[`${from}_${to}`]);
            let oneUnit = data[`${from}_${to}`];
            let amnt = document.getElementById("fromAmount").value;
            document.getElementById('toAmount').value = oneUnit * amnt;
        })
        .catch(error => {
            console.log(error);
        });
}


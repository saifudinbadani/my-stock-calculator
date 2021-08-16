var buyingPrice = document.querySelector('#buyingPrice');
var quantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#currentPrice');
var calculateButton = document.querySelector('#calculateButton');
var outputResult = document.querySelector('#outputResult');

var amountInvested = 0;
var netPortfolio = 0;
var currentInvestedAmt = 0 ;




function calculateResult(){
    amountInvested = Number(buyingPrice.value) *  Number(quantity.value);
    currentInvestedAmt = Number(currentPrice.value) * Number(quantity.value);
    if(buyingPrice.value == '' || currentPrice.value == '' || quantity.value == ''){
        outputResult.innerText = 'Enter values in all the fields.'
    }
    else if (currentInvestedAmt === amountInvested){
        outputResult.innerText = 'No profit No loss!😑'
    }
    else if(amountInvested < currentInvestedAmt) {
        var profit = currentInvestedAmt - amountInvested;
        var profitPerc = (profit*100)/ amountInvested;

        outputResult.innerText = `Your net profit is ₹${profit} and percentage gain is ${profitPerc}%`

        

    }else{
        var loss = amountInvested - currentInvestedAmt;
        var lossPerc = (loss*100)/amountInvested;
        outputResult.innerText = `Your net loss is ₹${loss} and percentage loss is ${lossPerc}%`
        
    }
}

calculateButton.addEventListener('click', calculateResult)
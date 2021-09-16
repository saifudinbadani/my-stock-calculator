var buyingPrice = document.querySelector('#buyingPrice');
var quantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#currentPrice');
var calculateButton = document.querySelector('#calculateButton');
var outputResult = document.querySelector('#outputResult');

var amountInvested = 0;
var netPortfolio = 0;
var currentInvestedAmt = 0 ;




function calculateResult(){
    if(buyingPrice.value >= 0 && currentPrice.value >= 0 && quantity.value >= 0){
        amountInvested = Number(buyingPrice.value) *  Number(quantity.value);
        currentInvestedAmt = Number(currentPrice.value) * Number(quantity.value);
        if(buyingPrice.value == '' || currentPrice.value == '' || quantity.value == ''){
        outputResult.style.color = '#EF4444'
        outputResult.innerText = 'Enter values in all the fields!!'
        }
        else if (currentInvestedAmt === amountInvested){
        outputResult.innerText = 'No profit No loss!😑'
     }
        else if(amountInvested < currentInvestedAmt) {
        var profit = currentInvestedAmt - amountInvested;
        var profitPerc = ((profit*100)/ amountInvested).toFixed(2);
        outputResult.style.color = '#22C55E'
        outputResult.innerText = `Your net profit is ₹${profit} and percentage gain is ${profitPerc}%`

        

        }else{
        var loss = amountInvested - currentInvestedAmt;
        var lossPerc = ((loss*100)/amountInvested).toFixed(2);
        outputResult.style.color = '#EF4444'
        outputResult.innerText = `Your net loss is ₹${loss} and percentage loss is ${lossPerc}%`
            
        }
    } else{
        outputResult.style.color = '#EF4444'
        outputResult.innerText = 'Enter positive values!!'
    }
    
}

calculateButton.addEventListener('click', calculateResult)
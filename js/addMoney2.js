document.getElementById('show-cash-out-form').addEventListener('click', function(){
    console.log('cashogfhut');
    const cashOutForm = document.getElementById('cash-out-form')
    cashOutForm.classList.remove('hidden')
    const addMoneyFrom = document.getElementById('add-money-form')
    addMoneyFrom.classList.add('hidden', true)
    
});
document.getElementById('show-add-money-form').addEventListener('click', function(){
    console.log('asssss');
    const addMoneyFrom = document.getElementById('add-money-form')
    addMoneyFrom.classList.remove('hidden')
    const cashOutForm = document.getElementById('cash-out-form')
    cashOutForm.classList.add('hidden', true)
    
});
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault()
    const previousBalance = document.getElementById('account-balance');
    const previousBalanceValue = Number(previousBalance.innerText);

    const addMoneyInputField = document.getElementById('add-money-input');
    const addMoneyInputValue = Number(addMoneyInputField.value);
    console.log(addMoneyInputValue);
       
    const inputPinField = document.getElementById('input-pin-number');
    const inputPinValue = Number(inputPinField.value);
    if(inputPinValue !== 1){
        alert('hoiteche na mamu');
        return;
    }else{

        previousBalance.innerText =  previousBalanceValue + addMoneyInputValue
    }
    
});

// Withdraw
document.getElementById('btn-cash-out').addEventListener('click', function(e){
    e.preventDefault()

    const previousBalance = document.getElementById('account-balance');
    const previousBalanceValue = Number(previousBalance.innerText)

    const cashOutMoneyInputField = document.getElementById('input-cash-out');
    const cashOutMoneyInputValue = Number(cashOutMoneyInputField.value);
    console.log(cashOutMoneyInputValue);
    
    
    const inputPinField = document.getElementById('cashOut-pin-number');
    const inputPinValue = Number(inputPinField.value);
    if(inputPinValue !== 1){
        alert('hoiteche na mamu');
        return;
    }else{

        console.log(inputPinValue);
        previousBalance.innerText =  previousBalanceValue - cashOutMoneyInputValue
    }
   
    
    
})
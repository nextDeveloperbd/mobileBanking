document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault()
    const phoneNumber = getInputValue('phoneNumber')
    // pin number field  
    const pinNumber = getInputValue('input-pin-number')
    if(phoneNumber === 5 && pinNumber === 1){
        window.location.href = '/home.html'
        alert("You are logged in"); 
    }
    else{
        alert('you have entered wrong type');   
    }
});

function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputNumber = Number(inputField.value);
    return inputNumber;
}
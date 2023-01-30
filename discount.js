
document.getElementById('discount-btn').addEventListener('click', function(){

    const secretField = document.getElementById('secret-field')
    const secretMessage =  secretField.value;
    secretField.value = ''

    const discountField = document.getElementById('discont');
    const discountAmount = parseFloat(discountField.innerText)
    
    if(secretMessage === 'DOM'){
        discountField.innerText = discountAmount * 0.3
    }
    else{
        alert('Your secret message is wrong') 
        return
    }
})
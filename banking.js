//deposit button handle
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-input');
    const depositAmountText = depositField.value;
    const updateDepositAmount = parseFloat(depositAmountText);
    const depositDisplay = document.getElementById('deposit-dash');
    const previousDepositAmountText = depositDisplay.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const totalDepositAmount = previousDepositAmount + updateDepositAmount;
    depositDisplay.innerText = totalDepositAmount;


    const previousBalanceField = document.getElementById('balance-dash');
    const previousBalanceText = previousBalanceField.innerText;
    const previousbalance = parseFloat(previousBalanceText);
    const updateBalance = previousbalance + updateDepositAmount;
    previousBalanceField.innerText = updateBalance;

    depositField.value = '';
});

//withdraw button handle
// document.getElementById('withdraw-button').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawField.value; 
//     const currentWithdrawAmount = parseFloat(withdrawAmountText);
//     const previousWithdraw = document.getElementById('withdraw-dash');
//     const previousWithdrawText = previousWithdraw.innerText;
//     const previousWithdrawAmount = parseFloat(previousWithdrawText);
//     const updateWithdrawAmount = previousWithdrawAmount + currentWithdrawAmount;
//     previousWithdraw.innerText = updateWithdrawAmount;
//     withdrawField.value = '';
// });
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawField.value; 
    // const currentWithdrawAmount = parseFloat(withdrawAmountText);
    const previousWithdraw = document.getElementById('withdraw-dash');
    const previousWithdrawText = previousWithdraw.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const updateWithdrawAmount = parseFloat(previousWithdrawText) + parseFloat(withdrawAmountText);
    previousWithdraw.innerText = updateWithdrawAmount;


    const previousBalanceField = document.getElementById('balance-dash');
    const previousBalanceText = previousBalanceField.innerText;
    const previousbalance = parseFloat(previousBalanceText);
    const afterWithdraw = previousbalance - parseFloat(withdrawAmountText);
    previousBalanceField.innerText = afterWithdraw;


    withdrawField.value = '';
});



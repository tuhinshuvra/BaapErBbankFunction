// deposit amount calculation
document.getElementById('deposit_btn').addEventListener('click', function () {
    const newDepositAmount = getInputFieldId('deposit_new');
    const preDepositAmount = getTextFieldId('deposit');

    // New Total Deposit Amount
    const newDepositTotal = newDepositAmount + preDepositAmount;
    setTextFieldValue('deposit', newDepositTotal);

    // New Total Balance Amount
    const preBalanceAmount = getTextFieldId('balance');
    const newBalanceTotal = preBalanceAmount + newDepositAmount;
    setTextFieldValue('balance', newBalanceTotal);
})
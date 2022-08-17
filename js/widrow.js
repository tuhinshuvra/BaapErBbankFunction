// widrow amount calculation
document.getElementById('widrow_btn').addEventListener('click', function () {
    const newWidrowAmount = getInputFieldId('widrow_new');
    const preWidrowAmount = getTextFieldId('widrow');

    // New Total Widrow Amount
    const newWidrowTotal = newWidrowAmount + preWidrowAmount;
    const preBalanceAmount = getTextFieldId('balance');

    if (newWidrowAmount > preBalanceAmount) {
        alert('Baper bank e ato taka nai! jao kaj kor khaw~~~');
        return;
    }
    setTextFieldValue('widrow', newWidrowTotal);

    // New Total Balance Amount
    const newBalanceTotal = preBalanceAmount - newWidrowAmount;
    setTextFieldValue('balance', newBalanceTotal);
})
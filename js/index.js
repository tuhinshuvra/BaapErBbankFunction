document.getElementById('deposit_btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit_new');
    const newDepositAmount = parseFloat(depositInput.value);

    const depositField = document.getElementById('deposit');
    const preDepositAmount = parseFloat(depositField.innerText);
    const currentDepositAmount = preDepositAmount + newDepositAmount;
    depositField.innerText = currentDepositAmount;


    const balanceField = document.getElementById('balance');
    const preBalanceAmount = parseFloat(balanceField.innerText);
    const newBalanceAmount = preBalanceAmount + newDepositAmount;
    balanceField.innerText = newBalanceAmount;
    depositInput.value = '';
})

document.getElementById('widrow_btn').addEventListener('click', function () {
    const widrowInput = document.getElementById('widrow_new');
    const newWidrowAmount = parseFloat(widrowInput.value);

    const widrowField = document.getElementById('widrow');
    const preWidrowAmount = parseFloat(widrowField.innerText);

    const balanceField = document.getElementById('balance');
    const preBalanceAmount = parseFloat(balanceField.innerText);

    widrowInput.value = '';
    if (newWidrowAmount > preBalanceAmount) {
        alert('Deposit Amount is greater than Balance!')
        return;
    }

    const totalWidrowAmount = preWidrowAmount + newWidrowAmount;
    widrowField.innerText = totalWidrowAmount;


    const newBalanceAmount = preBalanceAmount - newWidrowAmount;
    balanceField.innerText = newBalanceAmount;
})


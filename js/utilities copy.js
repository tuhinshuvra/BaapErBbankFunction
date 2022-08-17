function getInputFieldId(inputFieldId) {
    const inputFieldData = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputFieldData.value);
    inputFieldData.value = '';

    return inputFieldValue;
}

function getTextFieldId(fieldId) {
    const fieldData = document.getElementById(fieldId);
    const fieldValue = parseFloat(fieldData.innerText);

    return fieldValue;
}

function setTextFieldValue(textFieldId, newValue) {
    const textFieldData = document.getElementById(textFieldId);
    textFieldData.innerText = newValue;
}
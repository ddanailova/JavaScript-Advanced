function addItem() {
    let newItemText = document.getElementById("newItemText");
    let newItemValue = document.getElementById("newItemValue");

    if(newItemText.value !== "" && newItemValue.value !=="" ){
        let option = document.createElement('option');
        option.value =newItemValue.value;
        option.textContent = newItemText.value;
        document.getElementById('menu').appendChild(option);
    }
    newItemText.value="";
    newItemValue.value="";
}
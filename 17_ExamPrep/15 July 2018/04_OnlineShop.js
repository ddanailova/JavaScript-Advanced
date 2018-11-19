function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.block input:first-of-type');
    let submitBtn = $('#submit');
    let price = $('#price');
    let quantity = $('#quantity');
    let productCounter = 0;
    let totalPrice = 0;

    product.on('keyup', checkInput);
    submitBtn.on('click', addProduct);

    function checkInput() {
        if (product.val().trim() !== '') {
            submitBtn.removeAttr('disabled');
        } else {
            submitBtn.attr('disabled', 'true');
        }
    }

    function addProduct() {
        $('.display')
            .append(`<li>Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`)

        productCounter += Number(quantity.val());

        if (productCounter < 150) {
            $('#capacity').val(productCounter);
        } else {
            $('#capacity').val('full').addClass('fullCapacity');
            product.attr('disabled', 'true');
            submitBtn.attr('disabled', 'true');
            price.attr('disabled', 'true');
            quantity.attr('disabled', 'true');
        }

        totalPrice += Number(price.val());
        $('#sum').val(totalPrice);

        product.val('');
        price.val('1');
        quantity.val('1');
    }
}
function acceptance() {
    let company = $('input[name="shippingCompany"]');
    let product = $('input[name="productName"]');
    let qty = $('input[name="productQuantity"]');
    let scrape = $('input[name="productScrape"]');

    if (company.val().trim() !== "" && product.val().trim() !== ""&& typeof +qty.val().trim() === "number" && typeof +scrape.val().trim() === "number") {
        if((+qty.val()-(+scrape.val()))>0){
            $('#warehouse').append($('<div></div>')
                .append(`<p>[${company.val()}] ${product.val()} - ${+qty.val()-(+scrape.val())} pieces</p>`)
                .append('<button type="button">Out of stock</button>'));

            $('#warehouse button').on('click', function (ev) {
                $(ev.target).parent().remove();
            });
            company.val("");
            product.val("");
            qty.val("");
            scrape.val("");

        }
    }
}
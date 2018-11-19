class PaymentManager {

    constructor(title) {
        this.title = title;
    }

    render(target) {
        $(`#${target}`).append(`<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
</table>`);
        this.addEventListeners();
    }

    addEventListeners() {
        let that =this;
        $('.input-data button').on('click', function (event) {
            let name = $(`#${that.title.toLowerCase()} input[name="name"]`);
            let category = $(`#${that.title.toLowerCase()} input[name="category"]`);
            let price = $(`#${that.title.toLowerCase()} input[name="price"]`);



            if (name.val().trim() !== "" && category.val().trim() !== "" && price.val().trim()!== "") {
                $(`#${that.title.toLowerCase()} .payments`).append(`<tr>
            <td>${name.val()}</td>
            <td>${category.val()}</td>
            <td>${+price.val()}</td>
            <td><button>Delete</button></td>
        </tr>`);
                name.val("");
                category.val("");
                price.val("");

                $(`table > tbody > tr > td > button`).on('click', function (event){
                    $(event.target).parent().parent().remove();
                });
            }
        });
    }
}
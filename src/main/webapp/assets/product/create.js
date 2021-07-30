function showCreateForm() {
    let str = "";
    str += "<table class='table table-dark table-striped'>\n" +
        "<tr>\n" +
        "<td>Name</td>\n" +
        "<td><input type='text' id='name'></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>Price:</td>\n" +
        "<td><input type='text' id='price'></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>Quantity:</td>\n" +
        "<td><input type='text' id='quantity'></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>Color:</td>\n" +
        "<td><input type='text' id='color'></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td>Category</td>\n" +
        "<td><select id='category-create'>" +
        "</select></td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td></td>\n" +
        "<td><button type='button' onclick='createProduct()'>Save</td>\n" +
        "</tr>\n";
    categoryList1()
    document.getElementById("create").innerHTML = str;
}
function categoryList1() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/categories",
        success: function (list) {
            console.log(list)
            let str = "";
            for (let i = 0; i < list.length; i++) {
                str += "<option id='id-edit' value='" + list[i].id + "'>" + list[i].name + "</option>\n";

            }

            document.getElementById("category-create").innerHTML = str;
        }
    });
}
function createProduct() {
    let name = $('#name').val();
    let price = $('#price').val();
    let quantity = $('#quantity').val();
    let color = $('#color').val();
    let category = $('#category-create').val();
    let product = {
        "name": name,
        "price": price,
        "quantity": quantity,
        "color": color,
        "category": {
            "id": category
        }
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(blog),
        //tên API
        url: "http://localhost:8080/api/products",
        //xử lý khi thành công
        success: showListBlog

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();

}

function showListProduct() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/products",
        success: function (products)  {
            let str = "<table class='table table-dark table-striped'>" + "<tr>" +
                "<th>#</th>" +
                "<th>Product Name</th>" +
                "<th>Price</th>" +
                "<th>Quantiry</th>" +
                "<th>Color</th>" +
                "<th>Category Name</th>" +
                "</tr>"

                + "</table>";
            console.log(products)
            for (let i = 0; i < products.length; i++) {
                str += getProduct(products[i]);
            }
            document.getElementById('main').innerHTML = str;
        }
    });
}
function getProduct(product) {
    return "<tr>" +
        "<td>"+product.id+"</td>" +
        "<td>"+product.name+"</td>" +
        "<td>"+product.price+"</td>" +
        "<td>"+product.quantity+"</td>" +
        "<td>"+product.color+"</td>" +
        "<td>"+product.category.name+"</td>" +
      // "</td><td>" + '<button type="button"  onclick="showEditForm(' + blogList[i].id + ')"> Edit </button> '+
      "</td><td>" + ' <button  type="button"  onclick="showDeleteForm(' + product.id + ')"> View</button> '+
        "</tr>"
}
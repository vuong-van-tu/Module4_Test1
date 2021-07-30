function showDeleteForm(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/products/" + id,
        success: function (product) {
            let name = product.name;
            let price = product.price;
            let quantity = product.quantity;
            let color = product.color;
            let category = product.category.name;
            let str = "";
            str += `<input type="hidden"  id="deleteId" value="`+product.id+`"><table>
                            <tr>
                                <td>Name:</td>
                                <td>`+product.name+`</td>
                           </tr>
                           <tr>
                               <td>Price</td>
                               <td>`+product.price+`</td>
                            </tr>
                            <tr>
                               <td>Quantity</td>
                               <td>`+product.quantity+`</td>
                            </tr>
                            <tr>
                               <td>Color</td>
                               <td>`+product.color+`</td>
                            </tr>
                           <tr>
                                <td>Category name</td>
                              <td>`+product.category.name+`</td>
                               </td>
                           </tr>
                           <tr>
                                <td><button type="button" onclick="showListProduct()">Back to list product</button> </td>
                               <td><button type="button" id="save" onclick="deleteProduct()" >Delete</td>
                           </tr>
                       </table>`;
            document.getElementById("productList").innerHTML = str;
        }
    });
    event.preventDefault();
}

function deleteProduct() {
    let id = document.getElementById("deleteId").value;
    let product = {
        id: id,

    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "DELETE",
        data: JSON.stringify(product),
        url: "http://localhost:8080/api/products/" + id,
        success: showListProduct
    })
    event.preventDefault();
}
// main.js

$(document).ready(function() {
    // Function to load products from JSON file
    function loadProducts() {
        $.ajax({
            url: 'products.json',
            method: 'GET',
            dataType: 'json',
            success: function(products) {
                displayProducts(products);
            },
            error: function(error) {
                console.log('Error loading products:', error);
            }
        });
    }

    // Function to display products on the page
    function displayProducts(products) {
        var productList = $('#productList');
        productList.empty();

        products.forEach(function(product) {
            var productDiv = $('<div class="product">');
            var productName = $('<h3>').text(product.product_name);
            var productImage = $('<img>').attr('src', product.product_image);
            var productPrice = $('<p>').text('Price: $' + product.product_price.toFixed(2));

            productDiv.append(productName, productImage, productPrice);
            productList.append(productDiv);
        });
    }

    // Load products when the document is ready
    loadProducts();
});

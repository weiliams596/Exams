const eShop = {
    name: "eShop",
    phoneNumber: '+7-999-999-99-99',
    products: [{
        productName: "Iphone 12",
        category: "Electronics",
        price: 430000,
        stock: 100
    }, {
        productName: "Apple",
        category: "Fruit",
        price: 610,
        stock: 500
    }, {
        productName: "Humburger",
        category: "food",
        price: 860,
        stock: 200
    }, {
        productName: "Iphone 13",
        category: "Electronics",
        price: 510000,
        stock: 150
    }, {
        productName: "Iphone 14",
        category: "Electronics",
        price: 560000,
        stock: 200
    },],
    changeShopName: function () {
        while (true) {
            let newName = prompt("Enter new name for the eShop:");
            if (newName === null || newName === "" || newName.length < 2 || newName === undefined) {
                alert("Invalid name!");
            } else {
                this.name = newName;
                alert("Shop name changed successfully!");
                break;
            }
        }
        alert("The new name of the eShop is: " + this.name);
    },
    changePhoneNumber: function () {
        while (true) {
            let newPhoneNumber = prompt("Enter new phone number for the eShop:");
            if (newPhoneNumber === null || newPhoneNumber === undefined || newPhoneNumber.length < 11) {
                alert("Invalid phone number!You not change the phone number.");
                break;
            }
            else {
                this.phoneNumber = newPhoneNumber;
                alert("Phone number changed successfully!");
                break;
            }
        }
        alert("The new phone number of the eShop is: " + this.phoneNumber);
    },
    listProductNames: function () {
        let alertMessage = "The products in the eShop are: \n";
        for (item of this.products) {
            alertMessage += item.productName + "\n";
        }
        alert(alertMessage);
    },
    addProduct: function () {
        const product = {};
        let productName = '';
        let category = '';
        let price = 0;
        let stock = 0;
        let showMessage = "";
        while (true) {
            if (productName === '') {
                productName = prompt("Enter product name:");
                if (productName === null || productName === "" || productName.length < 2 || productName === undefined) {
                    alert("Invalid product name!");
                    continue;
                } else {
                    product.productName = productName;
                }
            }
            if (category === '') {
                category = prompt("Enter category:");
                if (category === null || category === "" || category.length < 2 || category === undefined) {
                    alert("Invalid category!");
                    continue;
                } else {
                    product.category = category;
                }
            }
            if (price === 0) {
                price = +prompt("Enter price:");
                if (price === null || price === "" || isNaN(price) || price <= 0) {
                    alert("Invalid price!");
                    continue;
                } else {
                    product.price = price;
                }
            }
            if (stock === 0) {
                stock = +prompt("Enter stock:");
                if (stock === null || stock === "" || isNaN(stock) || stock <= 0) {
                    alert("Invalid stock!");
                    continue;
                } else {
                    product.stock = stock;
                }
                this.products.push(product);
                alert("Product added successfully!");
                break;
            }
        }
        showMessage="The eShop has : \n" + this.products.length + " products.\n";
        showMessage += "And these are the products: \n" + this.products.map(product=> "The product name is: " +  product.productName + ", category is: " + product.category + ", price is: " + product.price + ", stock is: " + product.stock).join("\n");
        alert(showMessage);
    },
    applyDiscountToCategory:function(){
        let alertMessage = "The prices of products in the category are: \n";
        let category = prompt("Enter category:");
        let discount = 1;
        while(true){
            if(category === null || category === "" || category.length < 2 || category === undefined){
                alert("Invalid category!");
                category=prompt("Enter category:");
                continue;
            }
            discount = +prompt("Enter discount:(0-1)");
            if(discount === null || discount === "" || isNaN(discount) || discount < 0 || discount > 1){
                alert("Invalid discount!");
                continue;
            }
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].category === category){
                    alertMessage += this.products[i].productName + "old price : " + this.products[i].price ;
                    this.products[i].price = (this.products[i].price * (1-discount)).toFixed(2);
                    alertMessage += " new price: " + this.products[i].price + "\n";
                }
            }
            alert("Discount applied successfully!");
            alert(alertMessage);
            break;
        }
    },
    menu:function(){
        let showMenu =`Enter the number of the operation you want to perform:
        1. Change shop name
        2. Change phone number
        3. List product names
        4. Add product
        5. Apply discount to category
        6. Exit
        Please enter your choice: `;
        let bReturn = false;
        while(!bReturn){
            let choice = 0;
            while(true){
                choice = +prompt(showMenu);
                if(choice === null || choice === "" || isNaN(choice) || choice < 1 || choice > 6){
                    alert("Invalid choice!");
                    continue;
                }
                else{
                    break;
                }
            }
            switch(choice){
                case 1:
                    this.changeShopName();
                    break;
                    case 2:
                    this.changePhoneNumber();
                    break;
                case 3:
                    this.listProductNames();
                    break;
                case 4:
                    this.addProduct();
                    break;
                case 5:
                    this.applyDiscountToCategory();
                    break;
                case 6:
                    alert("Thank you for using our eShop!");
                    bReturn = true;
                    break;
                default:
                    alert("Invalid choice!");
            }
        }
    }
};

eShop.menu();
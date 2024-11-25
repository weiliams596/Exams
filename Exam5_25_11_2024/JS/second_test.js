function all_prices(param) {
    let discount = 1;
    if (param > 5000) {
        discount -= 0.1;
    }
    if (param > 10000) {
        discount -= 0.1;
    }
    if (param > 20000) {
        discount -= 0.1;
    }
    return discount;
}

function second_test() {
    let price = +prompt("Please enter the goods price:");
    let count = +prompt("Please enter the goods count:");
    if (price == null || isNaN(price)) {
        while (isNaN(price)) {
            firstNumber = +(prompt("Please enter the goods price:"));
        }
    }
    else if (price == 0) {
        alert("The goods price can not be 0!")
        while (isNaN(price) || price == 0 || price == null) {
            price = +(prompt("Please enter the goods price:"));
        }
    }
    if (count == null || isNaN(count)) {
        while (isNaN(count)) {
            count = +(prompt("Please enter the goods count:"));
        }
    }
    else if (count == 0) {
        alert("The goods count can not be 0!")
        while (isNaN(count) || count == 0 || count == null) {
            count = +(prompt("Please enter the goods count:"));
        }
    }
    let allPrices = price * count;
    alert("Your all prices is : " + Number(allPrices * all_prices(allPrices)).toFixed(2) + "\nDiscount " + Number((1.0 - all_prices(allPrices)) * 100).toFixed(2) + "%");
}

second_test();
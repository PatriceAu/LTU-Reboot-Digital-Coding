function discountAmount(arr, discountAmount, type) {
    let totalPrice = 0;
    for (var index=0; index<=arr.length; index++) {
         if (arr[index].type === type) {
             let discount = (arr[index].price * discountAmount)/100;
             totalPrice = totalPrice+(arr [index].price-discount) * arr[index].quantity;
         }
    else if
    
        }
    return totalPrice.toFixed(2);
    
    }
    
    console.log(shoppingCartTotal(shoppingCart));















console.log("the returned value" + e.rT);
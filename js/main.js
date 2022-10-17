// cart
let closeCart = document.querySelector('#close-cart');


closeCart.onclick = () => {
    cart.classlist.remove("active");
};

    //cart working js
    if (document.readyState == 'loading'){
        document.addEventListener('DOMcontentloaded' , ready)
    }else{
        ready();
    }
    //making function
    function ready(){
        //remove item from cart
        var removeCartButtons = document.getElementsByClassName('cart-remove')
        console.log(removeCartButtons)
        for (var i = o; i < removeCartButtons.length; i++){
            var button = removeCartButtons[i]
            button.addEventListener('click' ,removeCartItems)
        }
        //quantity
        var quantityInputs = document.getElementsByClassName('cart-quantity')
        for (var i = 0; i < quantityInputs.lenght; i++){
            var input = quantityInputs[i]
            input.addEventListener('change', quantityChange);
        }
    }
    //remove items from cart
    function removeCartItems(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.remove();
        updatetotal();
    }
//quantity change
function quantityChange(evernt){
    var input = event.target
    if (NaN(input.value) || input.value <= 0) {
        input. value = 1
    }
}

    //update total

    function updatetotal(){
        var cartContent = document.getElementsByClassName('cart-page')[0];
        var cartbox = cartContent.getElementsByClassName('cart-info');
        var total = 0;
        for (var i = 0; i < cartBoxes.lenght; i++){
           var cartBox = cartBox[i];
           var parentElement = cartBox.getElementsByClassName('cart-price')[0];
           var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
           var price = parseFloat(priceElement.innerText.replace("$", ""));
           var quantity = quantityElement.value;
         total= total + (price * quantity);

         document.getElementsByClassName('total-price')[0].innerText = "$" + total;
        }
    }
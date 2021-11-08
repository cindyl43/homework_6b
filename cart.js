/*** function that removes a particular item (obj) from the shopping cart ***/
function removeItem(obj) {
  // retrieve the stored value of the cart items so that we can modify it
  var cartItemsString = localStorage.getItem("cartItems")
  if (cartItemsString !== null) {
    var cartItems = JSON.parse(cartItemsString) // successfully loaded in the cart items

    // find the index of the input object in the list
    var ind = cartItems.findIndex(function (item) {
      return item.color === obj.color && item.filling === obj.filling && item.quantity === obj.quantity
    })
    console.log("ind " + ind)
    if (ind !== -1) {
      // remove item from the list
      cartItems.splice(ind, 1)
      // update the stored value
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      // re-render the page to reflect changes
      updatePage()
    }
  }
}

// add the currently selected product to the local storage data
function addItem() {
  // get stored value of cart items
  var cartItemsString = localStorage.getItem("cartItems")
  // check if item exists in storage, if so, parse it
  if (cartItemsString === null) { // first time, we have to create the cartItems list
    var cartItems = []
  } else { // we've been here before, load the value
    var cartItems = JSON.parse(cartItemsString)
  }

  // retrieve value of relevant inputs
  var colorValue = document.getElementById("color-dropdown").value
  var fillingValue = document.getElementById("filling-dropdown").value
  var quantityValue = document.getElementById("quantity-number").value
  // create json object based on selected values
  var itemObject = {color: colorValue, filling: fillingValue, quantity: quantityValue}
  // add this newly selected item to the cart
  cartItems.push(itemObject)
  // save the new value of the list
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

// updates the value of the list element
function updatePage() {
  // get value of local storage
  var cartItemsString = localStorage.getItem("cartItems")
  // check if value exists in local storage
  if (cartItemsString !== null) {
    var cartItems = JSON.parse(cartItemsString) // converting stored string to object
       // update the cart # element and subtotal
    var totalQuantity = 0
    for (let i = 0; i < cartItems.length; i++) {
      totalQuantity += parseInt(cartItems[i].quantity)
    }
    var counterNode = document.getElementById("cart-number")
    counterNode.innerText = totalQuantity.toString()
    var subtotal = document.getElementById("subtotal")
    subtotal.innerText = "$ " + totalQuantity* 11.99
    // for every item in our cart, create a new list item under cart-list
    var cartList = document.getElementById("cart-list")
    cartList.innerHTML = ""
    if (cartItems.length === 0) {
      // if nothing is in the cart, let's show the placeholder text
      document.getElementById("placeholder-text").style.visibility = "visible"
    } else {
      // items are in the cart, hide the placeholder text
      document.getElementById("placeholder-text").style.visibility = "hidden"
      // iterate through cart and for each item, add it to the list
      for (var i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i]
        const itemNode = document.createElement("li")
        itemNode.innerText = cartItem.color + " color pillow with " + cartItem.filling + " filling" + "(" + cartItem.quantity + ")"
        const removeButton = document.createElement("button")
        removeButton.innerHTML = "remove (X)"
        removeButton.onclick = function (cartItem) {
          return function() {
            removeItem(cartItem)
          }
        }(cartItem)
        itemNode.appendChild(removeButton)
        cartList.appendChild(itemNode)
      }
    }
  }
}

function addButton() {
  addItem()
  updatePage()
}


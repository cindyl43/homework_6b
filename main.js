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
    subtotal.innerText = "$ " + cartItems.length * 11.99
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
        var cartItem = cartItems[i]
        var itemNode = document.createElement("li")
        itemNode.innerText = cartItem.color + " color pillow with " + cartItem.filling + " filling" + "(" + cartItem.quantity + ")"

        // we have to get the cartItem eagerly, but return a function that executes lazily
        itemNode.onclick = (function (cartItem) {
          return function() {
            removeItem(cartItem)
          }
         }(cartItem))


        cartList.appendChild(itemNode)
      }
    }
  }
}

function addButton() {
  addItem()
  updatePage()
}

function removeButton(cartItem) {
  removeItem(cartItem)
  updatePage()
}

updatePage()
/*** Change color function***/
function colorUpdate() {
  let colorSelectTag = document.getElementById("color-dropdown")
  let colorSelectValue = colorSelectTag.options[colorSelectTag.selectedIndex].value
  switch (colorSelectValue) {
    case "After school special":
    greenFocus()
    break
    case "Morning haze":
    pinkFocus()
    break
    case "Cozy denim":
    blueFocus()
    break
    case "Raining day":
    greyFocus()
    break
  }
}

function greenFocus() {
  document.getElementById("gallery").src = "gGallery.jpg";
  document.getElementById("large").src = "gLarge.jpg";
}

function pinkFocus() {
  document.getElementById("gallery").src = "pGallery.jpg";
  document.getElementById("large").src = "pLarge.jpg";
}

function blueFocus() {
  document.getElementById("gallery").src = "bGallery.jpg";
  document.getElementById("large").src = "bLarge.jpg";
}

function greyFocus() {
  document.getElementById("gallery").src = "greyGallery.jpg";
  document.getElementById("large").src = "greyLarge.jpg";
}


 /*** Change filling function***/
function duckDownFocus() {
  document.getElementById("duckdown").src = "duckDown_S.jpg";
  document.getElementById("polyblend").src = "polyBlend.jpg";
  document.getElementById("memoryfoam").src = "foam.jpg";
}


function polyBlendFocus() {
  document.getElementById("duckdown").src = "duckDown.jpg";
  document.getElementById("polyblend").src = "polyBlend_S.jpg";
  document.getElementById("memoryfoam").src = "foam.jpg";
}


function memoryFoamFocus() {
  document.getElementById("duckdown").src = "duckDown.jpg";
  document.getElementById("polyblend").src = "polyBlend.jpg";
  document.getElementById("memoryfoam").src = "foam_S.jpg";
}


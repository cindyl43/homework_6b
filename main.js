/*** Add to cart function ***/
function addItemToCart() {
  var img = document.createElement('img');
  img.src = 'filled_c.jpg';
  img.id = "indicator";
  document.getElementById('changeQuan').appendChild(img);
}

/*** Change color function***/
function greenFocus() {
  document.getElementById("green").src = "green_S.jpg";
  document.getElementById("pink").src = "pink.jpg";
  document.getElementById("blue").src = "blue.jpg";
  document.getElementById("grey").src = "grey.jpg";
  document.getElementById("gallery").src = "gGallery.jpg";
  document.getElementById("large").src = "gLarge.jpg";
}

function pinkFocus() {
  document.getElementById("green").src = "green.jpg";
  document.getElementById("pink").src = "pink_S.jpg";
  document.getElementById("blue").src = "blue.jpg";
  document.getElementById("grey").src = "grey.jpg";
  document.getElementById("gallery").src = "pGallery.jpg";
  document.getElementById("large").src = "pLarge.jpg";
}

function blueFocus() {
  document.getElementById("green").src = "green.jpg";
  document.getElementById("pink").src = "pink.jpg";
  document.getElementById("blue").src = "blue_S.jpg";
  document.getElementById("grey").src = "grey.jpg";
  document.getElementById("gallery").src = "bGallery.jpg";
  document.getElementById("large").src = "bLarge.jpg";
}

function greyFocus() {
  document.getElementById("green").src = "green.jpg";
  document.getElementById("pink").src = "pink.jpg";
  document.getElementById("blue").src = "blue.jpg";
  document.getElementById("grey").src = "grey_S.jpg";
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


var table = document.getElementById("carrito");

function addRowsApple() {

  var total = Number(document.getElementById("total").textContent);
  var row = table.insertRow(0);
  var product = row.insertCell(0);
  var price = row.insertCell(1);
  var price1 = Math.floor(3);

    product.innerHTML = "Manzana";
    price.innerHTML = price1;
    document.getElementById("total").innerHTML = total + price1;

};

function addRowsMilk(argument) {

  var total = Number(document.getElementById("total").textContent);
  var row = table.insertRow(0);
  var product = row.insertCell(0);
  var price = row.insertCell(1);
  var price1 = Math.floor(12);

  product.innerHTML = "Leche";
  price.innerHTML = price1;
  document.getElementById("total").innerHTML = total + price1;

}

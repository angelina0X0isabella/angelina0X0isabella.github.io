let cartItems = [];

function displayCart() {
  let cartBody = document.getElementById("cart-body");
  cartBody.innerHTML = "";

  cartItems.forEach((item, index) => {
    let row = cartBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = index + 1;
    cell2.innerHTML = item.name;
    cell3.innerHTML = "Rp " + item.price;
    cell4.innerHTML = item.quantity;
    cell5.innerHTML = "Rp " + item.price * item.quantity;
    cell6.innerHTML = `<button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Hapus</button>`;
  });

  let totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  let totalElement = document.getElementById("total-price");
  totalElement.innerHTML = "Rp " + totalPrice;
}

function addToCart(name, price) {
  let index = cartItems.findIndex(item => item.name === name);

  if (index !== -1) {
    cartItems[index].quantity++;
  } else {
    cartItems.push({ name: name, price: price, quantity: 1 });
  }

  displayCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  displayCart();
}

document.querySelectorAll('.btn-add-to-cart').forEach(item => {
  item.addEventListener('click', event => {
    let name = item.getAttribute('data-name');
    let price = parseInt(item.getAttribute('data-price'));
    addToCart(name, price);
    showCart();
  });
});

document.getElementById('cart-link').addEventListener('click', event => {
  showCart();
});

function showCart() {
  let cartSection = document.getElementById("cart-section");
  cartSection.style.display = "block";
}

displayCart();

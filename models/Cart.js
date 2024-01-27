class Cart {
  constructor(cart, price) {
    this.cartList = cart;
    this.totalPrice = price;
    this.productsCustomer = [];
    this.toShow = [];
    this.cartList.addEventListener("click", this);
  }

  showProductsCustomer() {
    this.toShow = [...new Set(this.productsCustomer)];

    this.cartList.innerHTML = "";

    this.toShow.forEach((product) => {
      const quantity = this.productsCustomer.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
    this.calculateTotalPrice();
  }

  createCard(data, quantity) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);
    const controlEle = this.productControl(data, quantity);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;
    cardEle.innerHTML += controlEle;

    this.cartList.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img src=${image} alt=${alt} />`;

    return imgJSX;
  }

  productInfo(data) {
    const { name, price } = data;

    const infoJSX = `
      <div id="cart-info">
        <h4>${name}</h4>
        <p>$ ${price}</p>
      </div>
    `;

    return infoJSX;
  }

  productControl(data, quantity) {
    const { id } = data;
    const controlJSX = `
      <div id="cart-control">
        <div>
          <button data-id=${id} > - </button>
          <span>${quantity}</span>
          <button data-id=${id} > + </button>
        </div>
        <button data-id=${id} >Remove</button>
      </div>
    `;

    return controlJSX;
  }

  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;

    if (tagName !== "BUTTON") return;

    switch (type) {
      case "+":
        this.increaseQuantity(id);
        break;
      case "-":
        this.decreaseQuantity(id);
        break;
      case "Remove":
        this.removeProduct(id);
        break;
    }
  }

  increaseQuantity(id) {
    const product = this.productsCustomer.find((item) => item.id === +id);
    this.productsCustomer.push(product);
    this.showProductsCustomer();
  }

  decreaseQuantity(id) {
    const index = this.productsCustomer.findIndex((item) => item.id === +id);
    this.productsCustomer.splice(index, 1);
    this.showProductsCustomer();
  }

  removeProduct(id) {
    const newProduct = this.productsCustomer.filter((item) => item.id !== +id);
    this.productsCustomer = newProduct;
    this.showProductsCustomer();
  }

  calculateTotalPrice() {
    const total = this.productsCustomer.reduce((acc, cur) => (acc += cur.price), 0);
    this.totalPrice.innerText = `$ ${total}`;
  }
}

export default Cart;

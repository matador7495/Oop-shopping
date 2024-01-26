class Cart {
  constructor(cart, price) {
    this.cartList = cart;
    this.price = price;
    this.productsCustomer = [];
    this.toShow = [];
  }

  showProductsCustomer() {
    this.toShow = [...new Set(this.productsCustomer)];

    this.cartList.innerHTML = "";

    this.toShow.forEach((product) => {
      const quantity = this.productsCustomer.filter((p) => p.id === product.id).length;
      this.createCard(product, quantity);
    });
  }

  createCard(product, quantity) {
    console.log(product);
  }
}

export default Cart;

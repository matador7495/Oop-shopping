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
      <div>
        <h4>${name}</h4>
        <p>${price}</p>
      </div>
    `;

    return infoJSX;
  }

  productControl(data, quantity) {
    const { id } = data;
    const controlJSX = `
      <div>
        <div>
          <button data-id=${id} > - </button>
          <span>${quantity}</span>
          <button data-id=${id} > + </button>
        </div>
        <button data-id=${id} >Remove></button>
      </div>
    `;

    return controlJSX;
  }
}

export default Cart;

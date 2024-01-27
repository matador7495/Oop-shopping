class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showProductsCustomer() {
    this.toShow = [...new Set(this.productsCustomer)];

    this.parent.innerHTML = "";

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

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    if (this.constructor.name === "Cart") {
      const controlEle = this.productControl(data, quantity);
      cardEle.innerHTML += controlEle;
    }

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img src=${image} alt=${alt} />`;

    return imgJSX;
  }
}

export default Display;

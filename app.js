import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  const productsInstance = new Products(productsNode, productsData);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);

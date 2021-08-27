// url of image
const url = "https://kea-alt-del.dk/t7/api/products/1163";

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .season-name").textContent =
    product.season;
  document.querySelector(".breadcrumbs .product-name").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.product-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.product-img").alt = product.productdisplayname;
}

// populate the page

const addToCartBtn = document.querySelector(".addToCart");
// console.log("test");

const addToCart = (e) => {
  const button = e.target;
  const parentElement = button.parentNode;

  const price = parentElement.querySelector(".price").textContent.trim();
  const productDesc = parentElement
    .querySelector(".productDesc")
    .textContent.trim();

  const cartData = {
    price: price,
    productDesc: productDesc,
  };

  console.log(cartData);
  // const price = parentElement.querySelector(".price h1").textContent.trim();
  // const productName = parentElement
  //   .querySelector("p:nth-of-type(2)")
  //   .textContent.trim();
  // const imageSrc = parentElement.querySelector("img").getAttribute("src");

  // console.log("Price:", price);
  // console.log("Product Name:", productName);
  // console.log("Image Source:", imageSrc);
};

addToCartBtn.addEventListener("click", addToCart);

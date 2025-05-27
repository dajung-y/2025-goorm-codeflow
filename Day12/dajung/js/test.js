const bracelets = [
  {
    image : "../images/bracelet1.jpg",
    name : "18K 화이트 골드 다이아몬드 팔찌", 
    price : 145400 
  },
  {
    image : "../images/bracelet1.jpg",
    name : "18K 화이트 골드 리본 팔찌",
    price : 209000
  },
  {
    image : "../images/bracelet1.jpg",
    name : "18K 화이트 골드 체인 팔찌",
    price : 179000
  },
  {
    image : "../images/bracelet1.jpg",
    name : "18K 화이트 골드 두 줄 팔찌",
    price : 137000
  },
  {
    image : "../images/bracelet1.jpg",
    name : "18K 화이트 골드 리본 팔찌",
    price : 149200
  },
];

const productContainer = document.getElementById('product-container');

for(let i=0; i<bracelets.length; i++){
  const product = document.createElement('div');
  product.className = "card";
  product.innerHTML = `
  <img src = ${bracelets[i].image} id="product-img">
  <p>${bracelets[i].name}</p>
  <p id="product-price">${bracelets[i].price}원</p>
`;
  productContainer.appendChild(product);
}


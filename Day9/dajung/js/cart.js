let total=0;

function totalPrice(tag){
  total += parseInt(tag.value);
  console.log(total);

  document.getElementById('total').innerText=total; // 총 상품 가격
  document.getElementById('result').innerText=total; // 총 결제 가격

}
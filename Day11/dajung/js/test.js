// 문제 1
const assign1Div = document.getElementsByClassName('assign1')[0];
// getElementsByClassName()으로 DOM요소 가져올 시 항상 여러개 반환
// -> 요소 지정 필수 or querySelector 사용
console.log(assign1Div);
const assign1Btn = document.getElementById('assign1-btn');

assign1Btn.addEventListener('click', () => {
  const newP = document.createElement('p');
  newP.innerText = '새로 추가된 내용입니다.';
  assign1Div.appendChild(newP);
  console.log(newP);
})

// 문제 2
const assign2Ul = document.getElementById('assign2-ul');

const colorArr = ['빨강', '초록', '파랑'];

for(let i =0; i<colorArr.length; i++){
  const li = document.createElement('li');
  li.innerText = colorArr[i];
  assign2Ul.appendChild(li);
  console.log(li.innerText);
}

// 문제 3
const assign3Div = document.querySelector('.assign3');
console.log(assign3Div);
const assign3Btn = document.getElementById('assign3-btn');

assign3Btn.addEventListener('click', () => {
  const input = document.getElementById('assign3-input');
  if(input.value !==""){
    const newDiv = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = input.value;
    console.log(p);
  
    newDiv.appendChild(p);
    assign3Div.appendChild(newDiv);
    newDiv.style.border = '1px solid black';
  }
})

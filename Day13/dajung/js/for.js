// 1️⃣ 🔢 1부터 10까지 출력하기

for(let i=0; i<10; i++){
  console.log(i+1);
}
// 2️⃣ 🔁 짝수만 출력하기

for(let i=1; i<=20;i++){
  if(i%2==0){
    console.log(i)
  }
}

//  3️⃣ 🧮 합계 구하기

let sum=0;
for(let i=1;i<=100;i++){
  sum +=i;
}
console.log(sum);

// 4️⃣ 🔁 배열 반복해서 출력하기

let fruits = ["🍎","🍌","🍇"];
for(let fruit of fruits){
  console.log(fruit);
}

// 5️⃣ 📦 배열 인덱스와 값 함께 출력하기

for(let fruit in fruits){
  console.log(`${fruit} : ${fruits[fruit]}`);
}

// 6️⃣ ⭐ 구구단 출력하기 (2단)

for(let i=1; i<=9; i++){
  console.log(`2 x ${i} = ${2*i}`);
}
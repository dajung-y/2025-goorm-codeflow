// 1️⃣ 🔢 1부터 10까지 출력하기
// for문을 사용해서 1부터 10까지 숫자를 출력해보세요.
// 결과: 1, 2, 3, ..., 10
for (let i1 = 0; i1 <= 10; i1++) {
  console.log(i1);
}


// 2️⃣ 🔁 짝수만 출력하기
// for문을 사용해서 1부터 20까지 중에서 짝수만 출력하세요. ➡️ 2 4 6 8 ...
// 힌트: if문으로 짝수 판별
for (let i2 = 0; i2 <= 20; i2++) {
  if (i2 % 2 === 0) {
    console.log(i2);
  }
}

// 3️⃣ 🧮 합계 구하기
// 1부터 100까지 더해서 총 합계를 구해보세요!
// 결과는 콘솔에 총합: 5050 형태로 출력되도록!
// 누적 변수 sum 사용
let sum = 0;
for (let i3 = 0; i3 <= 100; i3++) {
  sum += i3;
}
console.log(sum);


// 4️⃣ 🔁 배열 반복해서 출력하기
// 아래 배열을 for문으로 돌려서 모든 과일을 출력하세요. 🍎🍌🍇
let fruits = ['사과', '바나나', '포도'];

for (let i4 = 0; i4 < fruits.length; i4++) {
  console.log(fruits[i4]);
}
// 5️⃣ 📦 배열 인덱스와 값 함께 출력하기
// 위 배열에서 인덱스 번호까지 함께 출력하세요.
// 결과:
// 0: 사과
// 1: 바나나
// 2: 포도
// 힌트: i 사용해서 index 접근
for (let i4 = 0; i4 < fruits.length; i4++) {
  console.log(i4 + ":" + fruits[i4]);
}


// 6️⃣ ⭐ 구구단 출력하기 (2단)
// for문을 사용해서 2단 구구단을 출력하세요!
// 출력 예시:
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 9 = 18
for (let i5 = 1; i5 <= 9; i5++) {
  console.log(2 + "x" + i5 + "=" + 2 * i5);
}

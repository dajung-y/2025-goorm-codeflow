// 1번

let fruits = ["apple", "banana", "orange"];
const result = fruits.includes("banana") ? "바나나가 있습니다" : "바나나가 없습니다";
console.log(result);

// 2번

let colors = ["red", "blue", "green", "blue"];
console.log(`blue가 처음 등장하는 인덱스 : ${colors.indexOf("blue")}`);

// 3번

let numbers = [1, 2, 3];
numbers.forEach((elm) => {
  console.log(elm);
})

// 4번

let nums = [1, 2, 3];
const newNums = nums.map((num) => num*2);
console.log(`요소에 2를 곱한 새로운 배열 : ${newNums}`);

// 5번

let animals = ["dog", "cat"];
animals.push("rabbit");
console.log(`추가된 animals 배열 :  ${animals}`);

// 6번

let stack = [1, 2, 3];
console.log(`stack 배열에서 제거된 마지막 값 : ${stack.pop()}`);
console.log(`변경된 stack 배열 : ${stack}`);

// 7번

let queue = [2, 3];
queue.unshift(1);
console.log(`추가된 queue 배열 : ${queue}`);

// 8번

let people = ["Alice", "Bob", "Charlie"];
console.log(`people 배열에서 제거된 첫번째 값 : ${people.shift()}`);
console.log(people);

// 9번

let months = ["Jan", "March", "April", "June"];
months.splice(2,0,"May");
console.log(months);

// 10번

let numbers2 = [10, 20, 30, 40, 50];
console.log(`잘라낸 새로운 배열 : ${numbers2.slice(1,4)}`);

// 11번

let words = ["Hello", "World"];
console.log(`새로운 문자열로 합쳐진 배열 : ${words.join(" ")}`);

// 12번

let scores = [70, 100, 90, 80];
scores.sort((a,b) => a-b);
console.log(`오름차순으로 정렬한 배열 : ${scores}`);
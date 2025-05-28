// 1번

let numbers = [10,20,30,40,50];
numbers.forEach((num) => console.log(num));

// 2번

let names = ["alice", "bob", "chalie"];
names.forEach((name) => console.log(name.toUpperCase()));

// 3번

let nums = [1,4,7,10,13,16];
nums.forEach((n) => {
  if(n%2==0) console.log(n);
})

// 4번

let prices = [1200,2500,3600,400];
let sum=0;
prices.forEach((i) => {
  sum +=i;
});
console.log(sum);

// 5번

let students = [
  {name: "Jin", age: 25},
  {name: "Sara", age:17},
  {name:"Mina", age: 16}
];

students.forEach((elm) => {
  console.log(elm.name);
})

// 6번

let nums2 =[2,3,4];
let mul =[];
nums2.forEach((n) => {
  mul.push(n**2);
})
console.log(mul);
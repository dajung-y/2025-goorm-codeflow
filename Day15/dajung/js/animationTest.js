// 풍선
const textBtn = $('#text-btn');
textBtn.before(`
  <p style="position:relative; bottom: -5rem; opacity: 0"
     id="text-up">
  텍스트 등장
  </p>
`);

textBtn.click(function(){
  console.log('텍스트 등장 버튼 클릭');
  $('#text-up').animate({opacity: 1, bottom: '0.3rem'}, 1000)
  // 한번에 넣으면 같이동작, 따로 넣으면 순차적 동작
});


// 색상 변환
const rainbow = ['orange', 'yellow', 'green', 'blue','navy','purple'];
let i=0;
$('#color-change-btn').click(function(){
  const colorBox = $('#color-box');
  colorBox.css('background-color', rainbow[i])
  console.log(rainbow[i]);
  i++;
});
  
  
// 리스트
const listBtn = $('#list-btn');
const list = $('#ul-list');
let index = 0;
list.append(`
  <li style="display:none">치킨</li>
  <li style="display:none">햄버거</li>
  <li style="display:none">피자</li>
  `);

listBtn.click(function(){
  console.log('리스트 버튼 클릭');
  $('#ul-list li').eq(index).show();
  index ++;
});


// 팝 효과
$('#pop-btn').click(function(){
  $('#pop-box').animate({width: '6rem', height: '6rem'},100)
               .animate({width: '5rem', height:'5rem'},100)
});


// 텍스트 사라짐
$('#remove-btn').click(function(){
  $('#remove-text').animate({opacity: 0});
})
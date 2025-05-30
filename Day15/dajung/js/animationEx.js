
$('#move-btn').click(function(){
  console.log('버튼 클릭');
  $('#box1').animate({left: '200px'}, 2000);
  console.log('애니메이션 동작');
})

$('#grow-btn').click(function(){
  $('#box2').animate({width: '10rem', height: '10rem'},2000);
});

$('#fade-btn').click(function(){
  $('#box3').animate({opacity: 0.2}, 1000);
});


function loop(){
  $('#loop-text').animate({opacity: 0.2},500)
                 .animate({opacity: 1},500,loop);
}
loop();


$('#bar-btn').click(function(){
  $('#bar').animate({width: '100%'},2000);
  let num=0;
  const percentNum = setInterval(function(){
    const percent = $('#percent');
    num++;
    percent.text(`${num}%`);
    if(num===100){
      clearInterval(percentNum);
    }
  },20);
});


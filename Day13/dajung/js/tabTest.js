// tab__btn, tab__content 가져오기

const tabBtns = document.querySelectorAll('.tab__btn')
const tabContents = document.querySelectorAll('.tab__content');

console.log(tabBtns[0].textContent);


for(let i=0; i<tabBtns.length; i++){
  tabBtns[i].addEventListener('click', ()=> {
    for(let j=0; j<tabBtns.length; j++){
      tabBtns[j].classList.remove('bg-color');
      tabContents[j].classList.remove('show');
    }
    tabBtns[i].classList.add('bg-color');
    tabContents[i].classList.add('show');
  })
};



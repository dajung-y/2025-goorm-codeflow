const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const postList = document.getElementById('post-list');


// post 생성
function createPost() {
  // 입력값이 있을 시
  if(postTitle.value!=="" && postContent.value!==""){

    // 제목, 내용, 삭제버튼
    const postListTitle = document.createElement('h4');
    const postListContent = document.createElement('p');
    const deleteBtn = document.createElement('button');
    
    postListTitle.innerText = postTitle.value;
    postListContent.innerText = postContent.value;
    deleteBtn.innerText= "삭제";
    console.log(`postListTitle 내용: ${postListTitle.value}, postListContent 내용: ${postListContent.value}`);

    // post 삭제 버튼
    deleteBtn.addEventListener('click',function(){
      console.log('게시글 삭제');
    })

    const postDiv = document.createElement('div');
    postList.appendChild(postDiv);
    postDiv.appendChild(postListTitle);
    postDiv.appendChild(postListContent);
    postDiv.appendChild(deleteBtn);

    postTitle.value="";
    postContent.value="";
  }

}

// onclick
// - html에 직접 이벤트를 지정하는 방식
// - 버튼 딱 한 개의 반응만 연결
// 버튼에 여러가지 반응 자유롭게 추가하고 싶을 때
// 클릭 뿐만 아니라 키보드로 눌렀을 때 실행

// addEventListener
// - 하나의 요소에 여러가지 반응 연결 가능
// 반응 -> click, mouseover, keydown, blur, focus
// 요소.addEventListener("반응", 실행할 함수(){});

const createBtn = document.getElementById('create-btn');

createBtn.addEventListener('click',createPost);
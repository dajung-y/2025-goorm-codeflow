// 댓글 목록
const commentList = [];

const createBtn = document.getElementById('create-btn');
createBtn.addEventListener('click', () => {
  const input = document.getElementById('comment-input');
  const commentsDiv = document.querySelector('.comments__div');

  // 공백 방지
  if(input.value!==""){
    // input으로 받은 댓글 객체로 저장
    const comment = {
      userName : '익명',
      comment: input.value
    }

    const commentElm = document.createElement('div');
    commentElm.className = 'comment__elm';
    const commentUser = document.createElement('p');
    const commentText = document.createElement('p');

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete__btn';
    deleteBtn.innerText= '삭제';


    commentUser.innerText = `@${comment.userName}`;
    console.log(commentUser.innerText);
    commentText.innerText = comment.comment;
    console.log(commentText.innerText);

    // html로 전달
    commentElm.appendChild(commentUser);
    commentElm.appendChild(commentText);
    commentElm.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      commentElm.remove();
      // commentList에서 제거하는 법 추가
    })

    commentsDiv.prepend(commentElm);

    commentList.push(comment);
  } else{
    alert('댓글을 입력해주세요');
  }
  input.value = "";
  console.log(commentList);
})


// 1. input, div 등 필요한 요소 js로 가져옴
// 2. 입력받은 댓글 넣을 객체 생성 (사용자, 댓글내용)
// 3. 댓글 객체와 DOM요소 연결
const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");


// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록

for(let i =0; i<btns.length; i++) {
    btns[i].addEventListener('click', () => {
        boxs[i].classList.add('on')
        btns[i].classList.add('on')
        
    });
    btns[i].addEventListener('mouseout', () => {
        boxs[i].classList.remove('on')
        btns[i].classList.remove('on')
    });
};




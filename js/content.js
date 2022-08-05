const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");


for(let i = 0; i < btns.length; i++) {
   for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener ("click", () => {
        for (let j=0; j<btns.length; j++) {
            btns[j].classList.remove('on');
            boxs[j].classList.remove('on');
        }
        btns[i].classList.add('on');
        boxs[i].classList.add('on');
    });
};



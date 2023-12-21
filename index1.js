let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let value0=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

for (let box of boxes) {
    box.addEventListener("click",()=>{
        if(value0){
            box.innerText="O";
            value0=false;
        }
        else{
            box.innerText="X"
            value0=true
        }
        box.disabled=true;
        count++;
        const isWinner =checkWinner();
    })
}

const checkWinner =()=>{
    for (const pattern of winPatterns) {
        let val1 =boxes[pattern[0]].innerText;
        let val2 =boxes[pattern[1]].innerText;
        let val3 =boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""  )
        {
            if(val1===val2 && val2 === val3){
                showWinner(val1);
        return true;
            }
        }
    }
}
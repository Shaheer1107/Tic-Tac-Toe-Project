let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newGameBtn = document.querySelector(".newbtn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
turnO = true;

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

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turnO) {
//             box.innerText = "O";
//             turnO = false;
//         }
//         else {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         CheckWinner();
//     });
// });

for (let box of boxes) {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }

        box.disabled = true;
        CheckWinner();
    });
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratutions! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const CheckWinner = () => 
{
    let count = 0;
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") 
        {
            if (pos1 === pos2 && pos2 === pos3) 
            {
                //boxes.classList.add("line");
                disableBoxes();
                showWinner(pos1);
                return;
            }

        }
    }

    for (let box of boxes) {
        if (box.innerText != "") {
            count++;
        }
    }
    console.log(`Count = ${count}`);
    if (count !== 9) 
    {
        count = 0;
    }
    else if (count === 9) 
    {
        msg.innerText = "Its a Draw!";
        msgContainer.classList.remove("hide");
        count = 0;
    }



}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

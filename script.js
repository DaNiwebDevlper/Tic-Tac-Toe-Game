const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resset-btn");
const msg = document.querySelector(".msg");

let turn0 = true //Player 0 is active


///////////////---Create the Winner patterns-----//////////////

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

////////////---- When box clicked disable the box ---///////////////

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true

    }
}

//////////---ResetBtn Function---/////////
const ResetBtnFun = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
        msg.classList.add("hide")
    }
    console.log("btn is clicked")
}


/////////////---Boxes---/////////////

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked")
        if (turn0) {
            box.innerHTML = "0"
            turn0 = false
        } else {
            box.innerHTML = "X"
            turn0 = true
        }

        box.disabled = true


        checkWinner()
    })

});

///////////----Show Winner Function----/////////

const showWinner = (winner) => {
    msg.innerText = `${winner} is winner`
    msg.classList.remove("hide")
}

////////////---Check the Winner Function---///////////

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pst1val = boxes[pattern[0]].innerText;
        let pst2val = boxes[pattern[1]].innerText;
        let pst3val = boxes[pattern[2]].innerText;

        if (pst1val != "" && pst2val != "" && pst3val != "") {
            if (pst1val === pst2val && pst2val === pst3val) {
                disableBoxes()
                showWinner(pst1val)
            }
        }
    }
}


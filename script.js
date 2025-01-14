console.log("Welcome To Tic Tac Toe")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let end =false;

//Check turn
const changeTurn = ()=>{

    return turn ==="X"?"O": "X"
}

//Check Win
const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [2,4,6],[0,4,8]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won"
            end = true
            e.forEach(index => {
                document.getElementsByClassName('box')[index].style.backgroundColor = "rgb(155, 244, 193)";
            });
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            audioTurn.play();
            checkWin();
            if(!end)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})

//reset button
reset.addEventListener('click',(e)=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element =>{
        Element.innerText = ""
    });

    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(Element => {
        Element.style.backgroundColor = ""; 
    });

    turn ="X";
    end =false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"

})
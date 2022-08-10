let cells = document.querySelectorAll('.cell');
cells = Array.from(cells);

let player = 'X';

let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function checkforwinner()
{
    winningCombination.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == player);
        if(check){
            hightlightcells(combination)
        }
    })
}

function hightlightcells(combination)
{
    combination.forEach(function(idx){
        cells[idx].classList.add("hightlight");
    })
}

cells.forEach(function(cell){

    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "") return
        cell.innerText = player;
        checkforwinner();
        player = player == "X" ? "O" : "X";
    })

})
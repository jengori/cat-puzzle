squares = document.getElementsByClassName("square");

// possible starting positions for the puzzle squares

possStartingPositions = [[3,7,2,1,6,8,4,5],[6,2,3,5,1,7,4,8],[6,1,5,3,8,4,7,2],[4,1,3,7,6,5,2,8],[6,5,8,2,4,7,3,1],[7,2,4,3,8,1,6,5],[4,6,5,1,8,3,2,7]];
// possStartingPositions = [[1,2,3,4,5,6,7,8]]

squaresToStartingPositions();

function squaresToStartingPositions() {
    selectedStartingPositions = possStartingPositions[Math.floor(Math.random() * possStartingPositions.length)]
    for (i=0; i<squares.length-1; i++){
        squares[i].innerHTML = '<img src="images/cat/cat-' + String(selectedStartingPositions[i]) + '.jpg">'
    }
}

// add event listener to all squares in the puzzle, enabling a square to move to the empty space when it is clicked on

for (i=0; i<squares.length; i++) {
    squares[i].addEventListener("click", moveSquare);
}

function moveSquare() {
    clickedImage = this.innerHTML;
    clickedSquareId =  this.id;
    for (i=0; i<squares.length; i++) {
        if (squares[i].innerHTML === ''){
            if (squaresAreAdjacent(this, squares[i])){
                squares[i].innerHTML = clickedImage;
                this.innerHTML = '';
                
                }       
            }
        }
    
    if (puzzleIsCompleted()) {
        setTimeout(onCompletion, 1000);
        }
    }

// function to check whether 2 squares on the board are horizontally or vertically adjacent

function squaresAreAdjacent(square1, square2){
    if ((square1.id == 1 && (square2.id == 2 || square2.id == 4))
     || (square1.id == 2 && (square2.id == 1 || square2.id == 3 || square2.id == 5)) 
     || (square1.id == 3 && (square2.id == 2 || square2.id == 6)) 
     || (square1.id == 4 && (square2.id == 1 || square2.id == 7 || square2.id == 5)) 
     || (square1.id == 5 && (square2.id == 4 || square2.id == 6  || square2.id == 2 || square2.id == 8))
     || (square1.id == 6 && (square2.id == 5 || square2.id == 3 || square2.id == 9)) 
     || (square1.id == 7 && (square2.id == 4 || square2.id == 8))
     || (square1.id == 8 && (square2.id == 7 || square2.id == 9 || square2.id == 5))
     || (square1.id == 9 && (square2.id == 8 || square2.id == 6))
    )
        return true
    
    else {
        return false
    }
}

// function to check whether the puzzle is completed

function puzzleIsCompleted() {
    if (squares[0].innerHTML === '<img src="images/cat/cat-1.jpg">'
    && squares[1].innerHTML === '<img src="images/cat/cat-2.jpg">'
    && squares[2].innerHTML === '<img src="images/cat/cat-3.jpg">'
    && squares[3].innerHTML === '<img src="images/cat/cat-4.jpg">'
    && squares[4].innerHTML === '<img src="images/cat/cat-5.jpg">'
    && squares[5].innerHTML === '<img src="images/cat/cat-6.jpg">'
    && squares[6].innerHTML === '<img src="images/cat/cat-7.jpg">'
    && squares[7].innerHTML === '<img src="images/cat/cat-8.jpg">'
    && squares[8].innerHTML === ''){
        return true;
    }

    else {
        return false;
    }
}

// function to show full picture and change heading text

function onCompletion() {
    document.getElementsByClassName("puzzle")[0].innerHTML = '<img id="cat" src="images/cat/cat-complete.jpg">';
    document.getElementsByTagName("h1")[0].innerHTML = "Hooray, you solved it!"
    document.getElementsByTagName("p")[0].innerHTML = "CLICK ON THE CAT TO PLAY AGAIN"
    document.getElementById("puzzle").classList.add("completed")
    document.getElementById("cat").addEventListener("click", resetGame)

}


// function to reset the game

function resetGame(){
    document.getElementsByTagName("h1")[0].innerHTML = "Can you solve the cat puzzle?"
    document.getElementsByTagName("p")[0].innerHTML = ""
    document.getElementById("puzzle").classList.remove("completed")
    document.getElementsByClassName("puzzle")[0].innerHTML = '<div class="square" id="1"></div><div class="square" id="2"></div><div class="square" id="3"></div><div class="square" id="4"></div><div class="square" id="5"></div><div class="square" id="6"></div><div class="square" id="7"></div><div class="square" id="8"></div><div class="square" id="9"></div>';
    squaresToStartingPositions();
    for (i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", moveSquare);
    }

}




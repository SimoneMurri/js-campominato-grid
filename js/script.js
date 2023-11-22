
const mainEL = document.querySelector('main section.main-content');
const buttonStartEl = document.querySelector('button#play');

buttonStartEl.addEventListener('click', function() {
    newGame(mainEL);
});

function newGame(wrapperElement){
    wrapperElement.innerHTML = '';

    for (let i = 1 ; i <= 81 ; i++){
        const currentSquare = getNewSquare();
        const squareContent = getRandomNumber(1,81);

        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

        if ( squareContent % 2 === 0){
            currentSquare.classList.add('bg-blue');
        } else {
            currentSquare.classList.add('bg-red');
        }

        currentSquare.addEventListener('click', function(){
            currentSquare.classList.toggle('clicked');
            console.log(squareContent);
        });

        wrapperElement.appendChild(currentSquare);
    }
}


function getNewSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}


function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}
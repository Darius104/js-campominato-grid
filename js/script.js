// Creare in JavaScript una griglia 8x8. Ogni cella della 
// griglia contiene un numero casuale da 1 a 64. I numeri presenti 
// nelle celle non devono essere ripetuti (ovvero la griglia contiene **tutti** i numeri da 1 a 64). 

// Ogni volta che clicco su un quadrato questo si colora di 
// verde se il numero contenuto e pari e in rosso se dispari.
document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    let numberOfSquares = 0;

    const scelta = document.getElementById('scelta').value;
    if ( scelta === 'Easy' ){
        numberOfSquares = 100;
    }else if ( scelta === 'Medium' ){
        numberOfSquares = 81;
    }else{
        numberOfSquares = 49;
    }
    
    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = [i];
        const newGeneratedSquare = generateGridItem(thisNumber);

        // Attacco l'evento allo square
        newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);

        if ( scelta === 'Easy' ){
            newGeneratedSquare.classList.add('easy');
        }else if ( scelta === 'Medium' ){
            newGeneratedSquare.classList.add('medium');
        }else{
            newGeneratedSquare.classList.add('hard');
        }

    }
}

function handleSquareClick() {
    this.classList.add('active');
}

function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('cella');
    newSquare.innerHTML = `<span>${number}</span>`; 
    return newSquare;
}


function generateSquaresNumbers (quantityOfNumbers) {
    const numbersArray = [];
    while(numbersArray.length < quantityOfNumbers) {
        // Un numero random
        const randomNumber = getRndInteger(1, quantityOfNumbers);

        // Se il numero random non è gia presente in numbersArray lo pusho
        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray;
}
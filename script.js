let numOfGridsPerSide = 16 //default;

let container = document.getElementById("container");

let bodyElement = document.body;

let dimensionOfGridButton = document.createElement('button');
dimensionOfGridButton.textContent = "Click me";

bodyElement.insertBefore(dimensionOfGridButton, container);

function createNewGrids(numOfGridsPerSide){
    let divsToRemove = document.querySelectorAll('.sub-div');

    divsToRemove.forEach( div => {
        div.remove();
    });

    for(let i=0; i<numOfGridsPerSide*numOfGridsPerSide; i++){
        let div = document.createElement('div');
        div.style.width = 800/numOfGridsPerSide + 'px';
        div.style.height = 800/numOfGridsPerSide + 'px';
        div.classList.add('sub-div');
        container.appendChild(div);
    }
}

function getValueFromUser() {
    numOfGridsPerSide = prompt('Please enter the number of grids you want on a side from 1 - 100')
    createNewGrids(numOfGridsPerSide);
}

dimensionOfGridButton.addEventListener("click",function () {
    getValueFromUser();
});








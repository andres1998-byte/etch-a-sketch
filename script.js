const sizeOfGrid=16;
const container=document.querySelector('.container');
const resetButton=document.querySelector('#button1');

function createGrid(amtOfGrids) {
    const wrapper=document.createElement('div');
    wrapper.classList.add('wrapper');
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div');
            const widthAndHeight = 960 / amtOfGrids;
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = "black";
            });
            row.appendChild(gridBox);
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}


resetButton.addEventListener('click', () => {
    userSize=Number(prompt('What dimensions do you want for the new grid?'));

    while (userSize>100) {
        userSize=Number(prompt('Pick a smaller number and make sure it it 100 or less.'));
    }

    const wrapper=document.querySelector('.wrapper');

    if (!wrapper) {
        createGrid(userSize);
    }
    else {
        wrapper.remove();
        createGrid(userSize);
    }

    

})



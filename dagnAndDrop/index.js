const boxItem = document.querySelector('.box-item')

boxItem.addEventListener('dragstart', dragStart);

function dragStart(e) {
    console.log('drag starts...')
    e.dataTransfer.setData("text/plain", e.target.id)
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

const dragBox = document.querySelectorAll('.drag-box');

dragBox.forEach(boxItem => {
    boxItem.addEventListener('dragenter', dragEnter)
    boxItem.addEventListener('dragover', dragOver);
    boxItem.addEventListener('dragleave', dragLeave);
    boxItem.addEventListener('drop', drop)
})

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
}
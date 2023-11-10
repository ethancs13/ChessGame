// const transfer = new DataTransfer()

// Make the DIV element draggable:
let element = document.querySelectorAll(".mydiv")
console.log(element)

element.forEach( (piece) => {
    piece.addEventListener('click', dragElement(piece));
})


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        // get the mouse cursor position at startup:
        document.onmouseup =  closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        elmnt.style.top = 0;
        elmnt.style.left = 0;
        // e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        pos1 = pos3 - elmnt.offsetLeft;
        pos2 = pos4 - elmnt.offsetTop;
        console.log(pos3, pos4)
        
        // console.log(`LEFT: ${pos3}\nTOP: ${pos4}`)
        // set the element's new position:
        elmnt.style.top = pos2 - 45 + "px";
        elmnt.style.left = pos1 - 61.469 + "px";


    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;   
    }
}
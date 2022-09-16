// reference the document
// look through its DOM to find an element with a particular Id
// pass the item to dragElement function after identifying each element
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

// closure
// outer function that encloses an inner function or functions
// it is useful when one or more functions need to access an outer function's scope
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
    
    // pointerdown event
    // a part of web APIs designed to help with DOM management  
    // onpointerdown
    // event handler which fires when a button is pushed
    // it works on both web and mobile browsers, with a few exceptions
	terrariumElement.onpointerdown = pointerDrag;
    
    // when the onpointerdown event is fired, this method is invoked
    function pointerDrag(e) {
        // prevent the default events that normally happen on pointerdown
        // have more control over the interface's behavior
        e.preventDefault();
        console.log(e);
        // capture the x and y coordinates of the plant at the moment it is clicked or touched
        pos3 = e.clientX;
        pos4 = e.clientY;

        // handle what happens when drag a plant and stop dragging it
        // design terrarium by adding, removing, and repositioning plants
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    };

    // edit the initial positions 1-4 set as local variables in the outer function
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        
        // reset pos3 and pos4 to the new X and Y coordinates of the element
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        
        // manipulate the plant's css style to set its new position based on new positions of pos1 and pos2
        // calculate the plant's top and left X and Y coordinates based on comparing its offset with these new positions
        // offsetTop & offsetLeft
        // CSS properties that set an element's position based on that of its parent
        // parent: any element that is not positioned as static 
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    };

    // reset the onpointerup and onpointermove events
    // restart plant's progress by starting to drag it again
    // or start dragging a new plant 
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    };

};
document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");

    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");

    console.log("Draggable elements:", draggableElements);
    console.log("Droppable elements:", droppableElements);

    draggableElements.forEach(elem => { 
        console.log("Adding dragstart event listener to element:", elem);
        elem.addEventListener("dragstart", dragStart);
        elem.addEventListener("dragend", dragEnd);

        
    });

    droppableElements.forEach(elem => { 
        console.log("Adding dragover and drop event listeners to element:", elem);
        elem.addEventListener("dragover", dragOver);
        elem.addEventListener("drop", drop);
        elem.addEventListener("dragenter", dragEnter);
        elem.addEventListener("dragleave", dragLeave);

    });
});

function dragStart(event) { 
    console.log("dragging");
    //transfering the data of the elements color
    //  //event.dataTransfer.setData("text", event.target.style.color)
    //instead of transfering the data of the color le us transfer the id
    event.dataTransfer.setData("text", event.target.id)
    //we need to compare it to the data draggablr id att of the droppable target.

}

function dragEnter(event) { 
    //event.target.classList.add("droppable-hover");
    if (!event.target.classList.contains("dropped")) { 
        event.target.classList.add("droppable-hover");
    }

}   

function dragEnd(event) {
    console.log("drag ended");
}

function dragOver(event) {
    console.log("drag over");
    if (!event.target.classList.contains("dropped")) { 
        event.preventDefault();
    }

    //event.preventDefault();
}

function dragLeave(event) { 
    console.log("dragleave")
    if (!event.target.classList.contains("dropped")) { 
    event.target.classList.remove("droppable-hover");
}
    //event.target.classList.remove("droppable-hover");
} 

function drop(event) {
    console.log("dropped");
    event.preventDefault();
    event.target.classList.remove("droppable-hover");

    // Access the draggable element's ID
    const draggableElementId = event.dataTransfer.getData("text");

    // Find the draggable element by its ID
    const draggableElement = document.getElementById(draggableElementId);

    // Access the text content of the draggable element
    const draggableText = draggableElement.textContent;

    // Copy the text to the droppable div
    event.target.textContent = draggableText;

    // Add necessary classes for styling
    event.target.classList.add("dropped");

    // Disable dragging on the draggable element
    draggableElement.setAttribute("draggable", "false");
    const droppableElementId = event.target.getAttribute("data-droppable-id");
    console.log(droppableElementId)
    console.log(draggableElementId)

    if (draggableElementId === droppableElementId) {
        event.target.classList.add("dropped-correct");
    } else {
        event.target.classList.add("dropped-wrong");
    }


}
    

    //default would be to open the link
    //access the dropped data
   
    
    
   



    //event.target.style.backgroundColor = draggableElementData;



//now for the project specific functionality 
//uncomment drag enter event

//after a box has already been dropped into we need to make sure it does not behave as if we can drop into it again. it should no longer be droppable.
//in drag enter
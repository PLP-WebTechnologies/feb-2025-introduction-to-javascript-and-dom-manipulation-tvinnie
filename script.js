// Function to change text content
function changeText() {
    document.getElementById("main-title").textContent = "Hello, JavaScript!";
    document.getElementById("description").textContent = "The text has been changed dynamically!";
}

// Function to toggle the box visibility
function toggleBox() {
    let box = document.getElementById("box");
    if (box) {
        box.remove();
    } else {
        let newBox = document.createElement("div");
        newBox.id = "box";
        newBox.style.width = "100px";
        newBox.style.height = "100px";
        newBox.style.backgroundColor = "blue";
        newBox.style.marginTop = "10px";
        document.body.appendChild(newBox);
    }
}

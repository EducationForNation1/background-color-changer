const randomButton = document.getElementById("randomColor");
const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
}

randomButton.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    changeBackgroundColor(randomColor);
});

colorPicker.addEventListener("input", (event) => {
    changeBackgroundColor(event.target.value);
});

// Initialize with a random color
changeBackgroundColor("#3498db");

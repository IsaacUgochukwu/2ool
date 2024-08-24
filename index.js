const width = window.innerWidth;
const height = window.innerHeight;

function handleLoad() {
    const widthContainer = document.getElementById("width").innerHTML = "Width: " + width + "px";
    const heightContainer = document.getElementById("height").innerHTML = "Height: " + height + "px";
}

function handleResize() {
    location.reload();
}

 function copyw() {
    try {
        const btn = document.getElementById("copyw");
        btn.innerHTML = "Copied";   
         navigator.clipboard.writeText(width + "px");
    }
    catch (error) {
        console.error("Error", error);
    }
}
function copyh() {
    try {
        const btn = document.getElementById("copyh");
        btn.innerHTML = "Copied";
        navigator.clipboard.writeText(height + "px");
    }
    catch (error) {
        console.error("Error", error);
    }
}

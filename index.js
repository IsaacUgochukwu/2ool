const width = window.innerWidth;
const height = window.innerHeight;

function handleLoad() {
  const widthContainer = document.getElementById("width").innerHTML = "Width: " + width + "px";
  const heightContainer = document.getElementById("height").innerHTML = "Height: " + height + "px";
}

function handleResize() {
  window.location.reload();
}

function copyWidth() {
  try {
    const btn = document.getElementById("copy-width");
    
    btn.innerHTML = "✔️";
    btn.classList.add('disabled');
    navigator.clipboard.writeText(width + "px");
  }
  catch (error) {
    console.error("Error", error);
  }
}

function copyHeight() {
  try {
    const btn = document.getElementById("copy-height");
    
    btn.innerHTML = "✔️";
    btn.classList.add('disabled');
    navigator.clipboard.writeText(height + "px");
  }
  catch (error) {
    console.error("Error", error);
  }
}

function goToFeedbackPage() {
  window.location.href = 'feedback.html';
}
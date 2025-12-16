function showPreview() {
  const panel = document.getElementById("aman");
  const imageDiv = document.getElementById("product-image");

  // Simulate loading product data
  imageDiv.style.backgroundImage = "linear-gradient(45deg, #ff9f43, #fb641b)";
  imageDiv.innerHTML =
    '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:white; font-size:24px;">Product Image</div>';

  panel.style.display = "block";
}

function hidePreview() {
  const panel = document.getElementById("aman");
  panel.style.display = "none";
}

// Optional: Close on outside click
document.addEventListener("click", function (event) {
  const panel = document.getElementById("aman");
  const btn = document.getElementById("preview-btn");
  if (
    event.target !== panel &&
    !panel.contains(event.target) &&
    event.target !== btn
  ) {
    hidePreview();
  }
});

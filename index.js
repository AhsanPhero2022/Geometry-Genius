document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "QA.html";
});
// question page location setup
document.getElementById("trangle-btn").addEventListener("click", function () {
  const triangleB = getInputValue("triangle-inputB");
  const triangleH = getInputValue("triangle-inputH");
  const area = 0.5 * triangleB * triangleH;
  return area;
});

function getInputValue(id) {
  const valueStr = document.getElementById(id).value;
  const value = parseFloat(valueStr);
  return value;
}

// common function to display data

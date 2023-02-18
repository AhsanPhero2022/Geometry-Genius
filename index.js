document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "QA.html";
});
// question page location setup
document.getElementById("trangle-btn").addEventListener("click", function () {
  const triangleB = getInputValue("triangle-input-one");
  const triangleH = getInputValue("triangle-input-two");

  const oneGeomatriName = getInnerText("triangle-name");

  const area = 0.5 * triangleB * triangleH;
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${1}</td>
  <td>${oneGeomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});
// Triangle area here
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("rectangle-input-one");
  const rectangleInputBValue = getInputValue("rectangle-input-two");
  const twoGeomatriName = getInnerText("rectangle-name");
  const area = rectangleInputAValue * rectangleInputBValue;

  //
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${2}</td>
  <td>${twoGeomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});
document.getElementById("parallelo-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("parallelo-iput-one");
  const rectangleInputBValue = getInputValue("parallelo-iput-two");
  const threeGeomatriName = getInnerText("parallelo-name");
  const area = rectangleInputAValue * rectangleInputBValue;
  //
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${3}</td>
  <td>${threeGeomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("rhombus-input-one");
  const rectangleInputBValue = getInputValue("rhombus-input-two");
  const foureGeomatriName = getInnerText("rhombus-Name");
  const area = (rectangleInputAValue * rectangleInputBValue) / 2;
  //
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${4}</td>
  <td>${foureGeomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("pentagon-input-one");
  const rectangleInputBValue = getInputValue("pentagon-input-two");
  const fiveGeomatriName = getInnerText("pentagon-name");
  const area = 0.5 * rectangleInputAValue * rectangleInputBValue;
  //
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${5}</td>
  <td>${fiveGeomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("ellipse-input-one");
  const rectangleInputBValue = getInputValue("ellipse-input-two");
  const sixGemomatriName = getInnerText("ellipse-name");
  const area = 3.14159265359 * rectangleInputAValue * rectangleInputBValue;
  //
  const tofix = area.toFixed(2);

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${6}</td>
  <td>${sixGemomatriName}</td>
  <td>${tofix + "cm"}</td>
  <td><bitton class="btn btn-info">convert</button></td>
  `;
  container.appendChild(tr);
});

function getInputValue(id) {
  const valueStr = document.getElementById(id).value;
  const value = parseFloat(valueStr);
  return value;
}

function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

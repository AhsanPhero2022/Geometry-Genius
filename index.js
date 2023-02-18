document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "QA.html";
});
// question page location setup
document.getElementById("trangle-btn").addEventListener("click", function () {
  const triangleB = getInputValue("triangle-input-one");
  if (isNaN(triangleB)) {
    alert("Please enter a number");
    return;
  }
  const triangleH = getInputValue("triangle-input-two");
  if (isNaN(triangleH)) {
    alert("Please enter a number");
    return;
  }
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
  if (isNaN(rectangleInputAValue)) {
    alert("Please enter a number");
    return;
  }
  const rectangleInputBValue = getInputValue("rectangle-input-two");
  if (isNaN(rectangleInputBValue)) {
    alert("Please enter a number");
    return;
  }
  const twoGeomatriName = getInnerText("rectangle-name");
  const area = rectangleInputAValue * rectangleInputBValue;

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
  // rectangle here
});
document.getElementById("parallelo-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("parallelo-iput-one");
  if (isNaN(rectangleInputAValue)) {
    alert("Please enter a number");
    return;
  }
  const rectangleInputBValue = getInputValue("parallelo-iput-two");
  if (isNaN(rectangleInputBValue)) {
    alert("Please enter a number");
    return;
  }
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
  if (isNaN(rectangleInputAValue)) {
    alert("Please enter a number");
    return;
  }
  const rectangleInputBValue = getInputValue("rhombus-input-two");
  if (isNaN(rectangleInputBValue)) {
    alert("Please enter a number");
    return;
  }
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
  if (isNaN(rectangleInputAValue)) {
    alert("Please enter a number");
    return;
  }
  const rectangleInputBValue = getInputValue("pentagon-input-two");
  if (isNaN(rectangleInputBValue)) {
    alert("Please enter a number");
    return;
  }
  const fiveGeomatriName = getInnerText("pentagon-name");
  const area = 0.5 * rectangleInputAValue * rectangleInputBValue;

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
// rectangle here
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const rectangleInputAValue = getInputValue("ellipse-input-one");
  if (isNaN(rectangleInputAValue)) {
    alert("Please enter a number");
    return;
  }
  const rectangleInputBValue = getInputValue("ellipse-input-two");
  if (isNaN(rectangleInputBValue)) {
    alert("Please enter a number");
    return;
  }
  const sixGemomatriName = getInnerText("ellipse-name");
  const area = 3.14159265359 * rectangleInputAValue * rectangleInputBValue;

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
//

function getInputValue(id) {
  const valueStr = document.getElementById(id).value;
  const value = parseFloat(valueStr);
  return value;
}

function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

function randomColor(input) {
  const firstCard = document.getElementById(input);
  firstCard.style.backgroundColor =
    "#" + (((1 << 22) * Math.random()) | 0).toString(14).padStart(6, "0");
  // random input here
}
document
  .getElementById("first-card")
  .addEventListener("mouseenter", function () {
    randomColor("first-card");
  });

document
  .getElementById("second-card")
  .addEventListener("mouseenter", function () {
    randomColor("second-card");
  });
document
  .getElementById("third-card")
  .addEventListener("mouseenter", function () {
    randomColor("third-card");
  });
document
  .getElementById("fourth-card")
  .addEventListener("mouseenter", function () {
    randomColor("fourth-card");
  });
document
  .getElementById("five-card")
  .addEventListener("mouseenter", function () {
    randomColor("five-card");
  });
document.getElementById("six-card").addEventListener("mouseenter", function () {
  randomColor("six-card");
});

// random color

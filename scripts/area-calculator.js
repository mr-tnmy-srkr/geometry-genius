// Triangle
function calculateTriangleArea() {
  // get triangle base value

  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  // get triangle height value

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  if (isNaN(height) || isNaN(base)) {
    alert("please insert a number");
    return;
  }

  const area = (0.5 * base * height).toFixed(2);

  // show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
  addToCalculationEntry("Triangle", area);
}

// Rectangle
function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  if (isNaN(width) || isNaN(length)) {
    alert("please insert a number");
    return;
  }

  const area = (width * length).toFixed(2);

  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;
  addToCalculationEntry("Rectangle", area);
}

// reusable function --> reduce duplicate code

// Parallelogram
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  if (isNaN(base) || isNaN(height)) {
    alert("please insert a number");
    return;
  }

  const area = (base * height).toFixed(2);

  setElementInnerText("parallelogram-area", area);
  addToCalculationEntry("Parallelogram", area);
}

// Ellipse
function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");

  if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("please insert a number");
    return;
  }

  const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
  setElementInnerText("ellipse-area", area);
  addToCalculationEntry("Ellipse", area);
}

// reusable get input value field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

//add to calculation entry
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  //   p.setAttribute("class",'my-4')
  //   p.className = 'my-4'
  p.classList.add("my-4");
  p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup> <br>
    <button onclick = "convertToMeter(this)" id='convert' class = 'btn btn-sm btn-success normal-case'>Convert to m<sup>2</sup></button>`;
  if (count == 20) {
    return;
  }
  calculationEntry.appendChild(p);
}
// convertToMeter
function convertToMeter(data) {
   const setConvertValue = ((data.parentElement.innerText.split(" ")[2]) / 10000).toFixed(4);
  data.innerHTML = `${setConvertValue} m<sup>2</sup>`
}

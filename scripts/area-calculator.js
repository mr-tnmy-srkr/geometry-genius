// Triangle
function calculateTriangleArea(){
    // get triangle base value

    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

// get triangle height value

    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area
    const areaSpan = document.getElementById("triangle-area")
        areaSpan.innerText = area;  

}
// Rectangle
function calculateRectangleArea(){
    const widthField = document.getElementById("rectangle-width");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    console.log(area);

    const areaSpan = document.getElementById("rectangle-area")
    areaSpan.innerText = area;  

}

// Slider elements
var redSlider = document.getElementById("redSlider");
var greenSlider = document.getElementById("greenSlider");
var blueSlider = document.getElementById("blueSlider");
var opacitySlider = document.getElementById("opacitySlider");

// Slider labels
var redDemo = document.getElementById("redDemo");
var greenDemo = document.getElementById("greenDemo");
var blueDemo = document.getElementById("blueDemo");
var opacityDemo = document.getElementById("opacityDemo");

// body wrapper
var container = document.getElementById("container");

// Updates slider labels
function updateSliderLabels() {
    redDemo.innerHTML = redSlider.value;
    greenDemo.innerHTML = greenSlider.value;
    blueDemo.innerHTML = blueSlider.value;
    opacityDemo.innerHTML = opacitySlider.value;
}

//Called every time a slider value changes
function updateColor() {
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    var opacity = opacitySlider.value;
    var colorString = `rgba(${red * 2.55}, ${green * 2.55}, ${blue * 2.55}, ${opacity * 0.01})`;
    
    // Set background color to chosen theme
    container.style.backgroundColor = colorString;
    // Save color theme in local storage
    localStorage.setItem('color-theme', colorString);
    // Update slider labels
    updateSliderLabels();
}

function updateTextColor() {
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    var opacity = opacitySlider.value;

    var colorSum = Number(red) + Number(green) + Number(blue);

    if(opacity <= 50 || colorSum <= 150) {
        container.style.color = "white";
    } else {
        container.style.color = "black";
    }
}

// Attach event handlers to each slider
opacitySlider.oninput = function() {
                updateColor();
                updateTextColor();
                };

redSlider.oninput = () => {
                updateColor()
                updateTextColor()
                };

greenSlider.oninput = () => {
                updateColor()
                updateTextColor()
                };

blueSlider.oninput = () => {
                updateColor()
                updateTextColor()
                };

// Initialize theme
window.onload = function() {
    // Gets rba string from local storage;
    var colorTheme = localStorage.getItem('color-theme');
    // Removes "rgba(" and ")" from string
    var colors = colorTheme.slice(5, colorTheme.length - 1);
    //Splits color values into array
    var colorsArray = colors.split(', ');
    // Sets slider values
    if(colorTheme) {
        container.style.backgroundColor = colorTheme;
        redSlider.value = colorsArray[0] / 2.55;
        greenSlider.value = colorsArray[1] / 2.55;
        blueSlider.value = colorsArray[2] / 2.55;
        opacitySlider.value = colorsArray[3] * 100;

        updateSliderLabels();
        updateTextColor();
    }
}
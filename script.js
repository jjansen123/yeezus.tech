// Smoothly shifting RGB background color

let r = 255, g = 0, b = 0; // starting color
let step = 1; // color step per frame
let phase = 0; // which color phase we're in (0 = red→green, 1 = green→blue, 2 = blue→red)

// Change this value to make the color shift faster or slower
// Lower = faster, higher = slower
let shiftSpeed = 1; // milliseconds between updates

function shiftColor() {
switch (phase) {
case 0:
g += step;
if (g >= 255) { g = 255; phase = 1; }
break;
case 1:
r -= step;
if (r <= 0) { r = 0; phase = 2; }
break;
case 2:
b += step;
if (b >= 255) { b = 255; phase = 3; }
break;
case 3:
g -= step;
if (g <= 0) { g = 0; phase = 4; }
break;
case 4:
r += step;
if (r >= 255) { r = 255; phase = 5; }
break;
case 5:
b -= step;
if (b <= 0) { b = 0; phase = 0; }
break;
}

// ✅ Correct backtick usage for template literals
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
setTimeout(shiftColor, shiftSpeed);
}

// Start shifting
shiftColor();
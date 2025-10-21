// Smoothly shifting RGB background color
let r = 255, g = 0, b = 255; // starting color
let step = 1; // color step per frame
let phase = 0; // which color phase we're in
let shiftSpeed = 30// milliseconds between updates

const mainTitle = document.getElementById("mainTitle");

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

  // Apply full color to background
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Apply 25% dimmer color to main title
  if (mainTitle) {
    const dimR = Math.floor(r * 1);
    const dimG = Math.floor(g * 1);
    const dimB = Math.floor(b * 1);
    mainTitle.style.color = `rgb(${dimR}, ${dimG}, ${dimB})`;
  }

  setTimeout(shiftColor, shiftSpeed);
}

shiftColor();

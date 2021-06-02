function toggleElementsDisplayStyless(elementA, elementB) {
        document.getElementById(elementA).style.display = 'none';
        document.getElementById(elementB).style.display = 'block';
}

function toggleElementsVisibilityStyles(elementA, elementB) {
    document.getElementById(elementA).style.visibility = 'hidden';
    document.getElementById(elementB).style.visibility = 'visible';
}

function rgbToHex(rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

function rgb(r, g, b) {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return '#'+red+green+blue;
}

export { toggleElementsDisplayStyless, toggleElementsVisibilityStyles, rgb };
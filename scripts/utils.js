function toggleElementsDisplayStyless(elementA, elementB) {
        document.getElementById(elementA).style.display = 'none';
        document.getElementById(elementB).style.display = 'block';
}

function toggleElementsVisibilityStyles(elementA, elementB) {
    document.getElementById(elementA).style.visibility = 'hidden';
    document.getElementById(elementB).style.visibility = 'visible';
}


export { toggleElementsDisplayStyless, toggleElementsVisibilityStyles };
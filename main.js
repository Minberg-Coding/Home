import * as Exports from './scripts/exports.js';


const pages = [...document.getElementsByClassName('container-pages')];
console.log(pages);

let currentPage;
let hiddenPages;

function updatePages() {
    currentPage = pages.filter((page) => window.getComputedStyle(page, null).display === 'block');
    hiddenPages = pages.filter((page) => window.getComputedStyle(page, null).display === 'none');
}
updatePages();

console.log(currentPage, hiddenPages);


const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', e => {
    currentPage[0].setAttribute('style', 'display: none;'); 
    updatePages();
    document.getElementById('home-page').style.display = 'block';
});

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', e => {
    updatePages();
    document.getElementById('start-page').style.display = 'block';
    currentPage[0].setAttribute('style', 'display: none;'); 
});

const learnButton = document.getElementById('learn-button');
learnButton.addEventListener('click', e => {
    updatePages();
    document.getElementById('learn-page').style.display = 'block';
    currentPage[0].setAttribute('style', 'display: none;'); 
});

const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', e => {
    updatePages();
    document.getElementById('contact-page').style.display = 'block';
    currentPage[0].setAttribute('style', 'display: none;'); 
});
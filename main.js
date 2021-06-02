import * as Exports from './scripts/exports.js';

const people = [
    new Exports.User('guestUser', 'minberg-coding@gmail.com', 'a'),
];
localStorage.setItem('Minberg-Coding_users', people[0]);

const rgb = Exports.Utils.rgb;

const pages = [...document.getElementsByClassName('container-pages')];

let currentPage;
let hiddenPages;

function updatePages() {
    currentPage = pages.filter((page) => window.getComputedStyle(page, null).display === 'block');
    hiddenPages = pages.filter((page) => window.getComputedStyle(page, null).display === 'none');
}
updatePages();


const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', e => {
    currentPage[0].setAttribute('style', 'display: none;'); 
    document.getElementById('home-page').setAttribute('style', 'display: block;');
    updatePages();
});

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', e => {
    currentPage[0].setAttribute('style', 'display: none;'); 
    document.getElementById('start-page').setAttribute('style', 'display: block;');
    updatePages();
});

const learnButton = document.getElementById('learn-button');
learnButton.addEventListener('click', e => {
    currentPage[0].setAttribute('style', 'display: none;'); 
    document.getElementById('learn-page').setAttribute('style', 'display: block;');
    updatePages();
});

const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', e => {
    currentPage[0].setAttribute('style', 'display: none;'); 
    document.getElementById('contact-page').setAttribute('style', 'display: block;');
    updatePages();
});

const loginModal = new Exports.Modal(`
    <form>
    <div>
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="username">
        <span></span>
    </div> 
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="password">
        <span></span>
    </div>
    <button id="submit-log-in">Log-in</button>
    </form>
    `,
    {
    span: true,
    height: 70+'%',
    color: '#fff',
    }
);

const loginButton = document.getElementById('login');
loginButton.addEventListener('click', e => {
    loginModal.open();
});

const loginInput = loginModal.content.getElementsByTagName('input');
const submitLoginButton = document.getElementById('submit-log-in');
const loginForm = document.querySelector('form');

loginForm.onsubmit = () => { return false };

console.log(localStorage.getItem('Minberg-Coding_users'));

submitLoginButton.onclick = () => {
    if((loginInput[0].value != '') && (loginInput[1].value != '')) {
        if ((loginInput[0].value == localStorage.getItem('Minberg-Coding_users')) && (loginInput[1].value == localStorage.getItem('Minberg-Coding_users'[0]))) {
            alert('sdafa');
        }
    }

    else {
        if (loginInput[0].value == '') {
            loginInput[0].nextElementSibling.textContent = 'Username is empty.';
            setTimeout(() => {
                loginInput[0].nextElementSibling.textContent = '';
            }, 2000);
        }

        if (loginInput[1].value == '') {
            loginInput[1].nextElementSibling.textContent = 'Password is empty.';
            setTimeout(() => {
                loginInput[1].nextElementSibling.textContent = '';
            }, 2000);
        }
    }
};
import HomePage from './page/HomePage.js';

const $ = (selector) =>{
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements;
}
const router = () => {
    const homePage = new HomePage();
    $("#main-content").innerHTML = homePage.render();
}
window.addEventListener('DOMContentLoaded', router);
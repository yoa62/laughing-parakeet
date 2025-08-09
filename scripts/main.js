// This file contains the JavaScript code for the website. It handles interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to My Simple Website!';
    document.body.appendChild(greetingElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});
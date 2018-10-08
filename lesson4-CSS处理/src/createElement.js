import style from "./createElement.css";
export function createElement(className) {
    let element = document.createElement('div');
    element.style.height = "50px";
    element.classList.add(style[className]);
    element.style.marginBottom = "10px";
    element.innerHTML = "Hello World.";
    document.body.appendChild(element);
} 
import _ from 'lodash'
import styles from './styles.scss'

function createElement(className) {
    let element = document.createElement('div');
    element.style.height = "50px";
    element.classList.add(styles[className]);
    element.style.marginBottom = "10px";
    element.innerHTML = _.join(['Hello','World.'], ' ');
    document.body.appendChild(element);
}

createElement('aqua');
createElement('red');
createElement('blue');






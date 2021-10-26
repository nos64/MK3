import {createElement} from './create.js';

export const playerWins = (name) => {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' wins!';
    } else {
        $winTitle.innerText = ' DRAW';
    }
    return $winTitle;
}
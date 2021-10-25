import showTime from './showTime.js';
import getRandom from './getRandom.js';
import {start, end, hit, defence, draw} from './logs.js';

const $chat = document.querySelector('.chat');

export const generateLogs = (type, player1, player2, value) => {
    let text;
    let el;
    switch (type) {
        case hit:
            text = type[getRandom(type.length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${showTime()} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case defence:
            text = type[getRandom(type.length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            el = `<p>${showTime()} - ${text}</p>`;
            break;
        case start:
            text = type.replace('[time]', showTime()).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case end:
            text = type[getRandom(type.length -1)].replace('[playerLose]', player1.name).replace('[playerWins]', player2.name);
            el = `<p>${text}</p>`;
            break;
        case draw:
            text = type;
            el = `<p>${text}</p>`;
            break;
        }
    return $chat.insertAdjacentHTML('afterbegin', el);
}
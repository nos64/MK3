import showTime from './showTime.js';
import getRandom from './getRandom.js';
import {start, end, hit, defence, draw} from './logs.js';

const $chat = document.querySelector('.chat');

export const generateLogs = (type, { name } = {}, {name: playerName2, hp } = {}, value) => {
    let text;
    let el;
    switch (type) {
        case hit:
            text = type[getRandom(type.length -1)].replace('[playerKick]', name).replace('[playerDefence]', playerName2);
            el = `<p>${showTime()} - ${text} -${value} [${hp}/100]</p>`;
            break;
        case defence:
            text = type[getRandom(type.length -1)].replace('[playerKick]', name).replace('[playerDefence]', playerName2);
            el = `<p>${showTime()} - ${text}</p>`;
            break;
        case start:
            text = type.replace('[time]', showTime()).replace('[player1]', name).replace('[player2]', playerName2);
            el = `<p>${text}</p>`;
            break;
        case end:
            text = type[getRandom(type.length -1)].replace('[playerLose]', name).replace('[playerWins]', playerName2);
            el = `<p>${text}</p>`;
            break;
        case draw:
            text = type;
            el = `<p>${text}</p>`;
            break;
        }
    return $chat.insertAdjacentHTML('afterbegin', el);
}
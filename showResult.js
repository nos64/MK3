import {player1, player2} from './Game.js';
import {end, draw} from './logs.js';
import {createReloadButton} from './reloadBtn.js';
import {playerWins} from './finalMsg.js';
import {generateLogs} from './generateLogs.js';
import {$arenas} from './Game.js';

const $randomButton = document.querySelector('.button');

export const showResult = () => {
    if (player1.hp === 0 || player2.hp ===0) {
        $randomButton.disabled = true;
        createReloadButton()
    }
    if (player1.hp === 0 && player1.hp < player2.hp > 0) {
        $arenas.appendChild(playerWins(player2.name));
        generateLogs(end, player1, player2);
    } else if (player2.hp === 0 && player2.hp < player1.hp > 0) {
        $arenas.appendChild(playerWins(player1.name));
        generateLogs(end, player2, player1);
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
        generateLogs(draw);
    }
}

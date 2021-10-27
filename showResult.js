import {player001, player002} from './classPlayer.js';
import {end, draw} from './logs.js';
import {createReloadButton} from './reloadBtn.js';
import {playerWins} from './finalMsg.js';
import {generateLogs} from './generateLogs.js';
import {$arenas} from './classGame.js';

const $randomButton = document.querySelector('.button');

export const showResult = () => {
    if (player001.hp === 0 || player002.hp ===0) {
        $randomButton.disabled = true;
        createReloadButton()
    }
    if (player001.hp === 0 && player001.hp < player002.hp > 0) {
        $arenas.appendChild(playerWins(player002.name));
        generateLogs(end, player001, player002);
    } else if (player002.hp === 0 && player002.hp < player001.hp > 0) {
        $arenas.appendChild(playerWins(player001.name));
        generateLogs(end, player002, player001);
    } else if (player001.hp === 0 && player002.hp === 0) {
        $arenas.appendChild(playerWins());
        generateLogs(draw);
    }
}

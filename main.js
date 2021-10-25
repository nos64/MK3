import {player001, player002} from './player.js';
import {start, hit, defence} from './logs.js';
import {createPlayer} from './create.js';
import {enemyAttack, playerAttack} from './attack.js';
import {showResult} from './showResult.js';
import {generateLogs} from './generateLogs.js';
export const $arenas = document.querySelector('.arenas');
export const $formFight = document.querySelector('.control');

$arenas.appendChild(createPlayer(player001));
$arenas.appendChild(createPlayer(player002));

$formFight.addEventListener('submit', function(e) {
    e.preventDefault(start);
   
    const enemy = enemyAttack();
    const player = playerAttack();
   
    if (player.defence !== enemy.hit) {
        player001.changeHP(enemy.value);
        player001.renderHP();
        generateLogs(hit, player002, player001, enemy.value);
    } else {
        generateLogs(defence, player002, player001);
    }

    if (enemy.defence !== player.hit) {
        player002.changeHP(player.value);
        player002.renderHP();
        generateLogs(hit, player001, player002, player.value);
    } else {
        generateLogs(defence, player001, player002);
    }
    showResult();
});

generateLogs(start, player001, player002);

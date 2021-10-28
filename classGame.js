export default class Game {
    constructor() {
        this.$arenas = document.querySelector('.arenas');
        this.$formFight = document.querySelector('.control');
    }

    start = () => {
        $arenas.appendChild(createPlayer(player001));
        $arenas.appendChild(createPlayer(player002));
        generateLogs(start, player001, player002);
        $formFight.addEventListener('submit', (e) => {
            e.preventDefault(start);
           
            const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
            const {hit: hitPlayer, defence: defencePlayer, value} = playerAttack();
           
            if (defencePlayer !== hitEnemy) {
                player001.changeHP(valueEnemy);
                player001.renderHP();
                generateLogs(hit, player002, player001, valueEnemy);
            } else {
                generateLogs(defence, player002, player001);
            }
        
            if (defenceEnemy !== hitPlayer) {
                player002.changeHP(value);
                player002.renderHP();
                generateLogs(hit, player001, player002, value);
            } else {
                generateLogs(defence, player001, player002);
            }
            showResult();
        }); 
    }

    
}

export const $arenas = document.querySelector('.arenas');
export const $formFight = document.querySelector('.control');


import {start, hit, defence} from './logs.js';
import {player001, player002} from './classPlayer.js';
import {createPlayer} from './create.js';
import {generateLogs} from './generateLogs.js';
import {enemyAttack, playerAttack} from './attack.js';
import {showResult} from './showResult.js';

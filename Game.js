import Player from './Player.js'
export let player1;
export let player2;

export class Game {
    constructor() {
        this.$arenas = document.querySelector('.arenas');
        this.$formFight = document.querySelector('.control');
    }

    getPlayer = async () => {
        const body  = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }
    getEnemy = async () => {
        const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
        return body;
    }
    
    getEnemyAtack = async ({hit, defence} = playerAttack()) => {
        const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit:  hit,
                defence: defence, 
            })
        });
        let result = await body.json();
        return result;
      }

    fight = async () => {
       
        const {player1: {hit: hitPlayer, defence: defencePlayer, value},
         player2: {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy}} = await this.getEnemyAtack();
    
        if (defencePlayer !== hitEnemy) {
            player1.changeHP(valueEnemy);
            player1.renderHP();
            generateLogs(hit, player2, player1, valueEnemy);
            this.getAudioHit();

        } else {
            generateLogs(defence, player2, player1);
            this.getAudioDefence();
        }
    
        if (defenceEnemy !== hitPlayer) {
            player2.changeHP(value);
            player2.renderHP();
            generateLogs(hit, player1, player2, value);
            setTimeout(() => {
                this.getAudioHit();
            }, 150);

        } else {
            generateLogs(defence, player1, player2);
            setTimeout(() => {
            this.getAudioDefence();
            }, 150);
        }
        showResult();
    }

    getAudioDefence = () => {
        const defenceAudio = new Audio ('assets/sound/mk3-defence.mp3');
        defenceAudio.autoplay = true; 
        return defenceAudio;
    }
    getAudioHit = () => {
        const hitAudio = new Audio ('assets/sound/mk3-hit.mp3');
        hitAudio.autoplay = true;
        return hitAudio;
    }

    showFigtImg = () =>{
       const $fightImg = createElement('img', 'fightImg');
       $fightImg.src = '/assets/fight.gif';
       this.$arenas.appendChild($fightImg);
       const fightAudio = new Audio ('assets/sound/mk3-fight.mp3');
        fightAudio.autoplay = true;
        setTimeout(() => {
            $fightImg.style.display = 'none';
        }, 2500); 
    }
    
    start = async () => {
        this.showFigtImg()
        const enemy = await this.getEnemy();
        const p1 = JSON.parse(localStorage.getItem('player1'));
        const p2 = enemy;
        player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        });
        player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas',
        });
        this.$arenas.appendChild(createPlayer(player1));
        this.$arenas.appendChild(createPlayer(player2));
        generateLogs(start, player1, player2);

        this.$formFight.addEventListener('submit', (e) => {
            e.preventDefault(start);
            this.fight()
        });
    }

}

export const $arenas = document.querySelector('.arenas');
export const $formFight = document.querySelector('.control');


import {start, hit, defence} from './logs.js';
import {createPlayer, createElement} from './create.js';
import {generateLogs} from './generateLogs.js';
import {playerAttack} from './attack.js';
import {showResult} from './showResult.js';


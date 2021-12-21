import getRandom from './getRandom.js';
import {HIT, ATTACK} from './hit-attack.js';
import {$formFight} from './Game.js';

export  const playerAttack = () => {
      const attack = {};
   
      for (let item of $formFight) {
 
          if (item.checked && item.name ==='hit') {  // цикл определяет какой чекбокс выбран - куда бью
              attack.value = getRandom(HIT[item.value]); // на сколько удар
              attack.hit = item.value; // куда ударил
          }
          if (item.checked && item.name === 'defence') { //цикл определяет какой чекбокс выбран - что защищаю
              attack.defence = item.value; // что защищал
          }
          item.checked = false; // сброс чекбоксов
      }
      return attack;
  }
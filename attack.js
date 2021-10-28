import getRandom from './getRandom.js';
import {HIT, ATTACK} from './hit-attack.js';
import {$formFight} from './classGame.js';

export const enemyAttack = () => {
    const hit = ATTACK[getRandom(ATTACK.length)-1];
    const defence = ATTACK[getRandom(ATTACK.length)-1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
  }
export  const playerAttack = () => {
      const attack = {};
      
      for (let item of $formFight) {
          // console.dir(item);
          if (item.checked && item.name ==='hit') {  // цикл определяет какой чекбокс выбран - куда бью
              attack.value = getRandom(HIT[item.value]); // на сколько удар
              // console.log(attack.value);
              attack.hit = item.value; // куда ударил
              // console.log(attack.hit);
          }
          if (item.checked && item.name === 'defence') { //цикл определяет какой чекбокс выбран - что защищаю
              attack.defence = item.value; // что защищал
          }
          item.checked = false; // сброс чекбоксов
      }
      return attack;
  }
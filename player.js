import {changeHP, renderHP, elHP} from './changeHP.js';

export const player001 = {
    player: 1,
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Katana', 'Gun', 'Bomb'],
    attack,
    changeHP,
    elHP,
    renderHP,
};

export const player002 = {
    player: 2,
    name: 'SUB ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Pig', 'Knife', 'Rifle'],
    attack,
    changeHP,
    elHP,
    renderHP,
};

function attack() {
    console.log(this.name + ' ' + 'Fight...');
}
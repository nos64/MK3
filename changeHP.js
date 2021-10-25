
export function changeHP(randNum) {
    this.hp -= randNum;
    if (this.hp <=0) {
        this.hp = 0;
    }
    // console.log(player001.hp);
    // console.log(player002.hp);
}

export function elHP() {
    const $playerLife = document.querySelector('.player' + this.player +' .life');
    // console.log($playerLife);
    return $playerLife;
}

export function renderHP() {
    this.elHP().style.width = this.hp + '%';
    // console.log(player001.hp + '%');
    // console.log(player002.hp + '%');
}
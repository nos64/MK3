class Player {
    constructor(props) {
        // console.log(props);
        
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;     
    }

    attack = () => console.log(`${this.name} + 'Fight...`);

    changeHP = (randNum) => {
        this.hp -= randNum;
        if (this.hp <=0) {
            this.hp = 0;
        }
    }

    elHP = () => {
        const $playerLife = document.querySelector(`.player${this.player} .life`);
            return $playerLife;
        }

    renderHP = () => this.elHP().style.width = `${this.hp}%`;  
    
}

export const player001 = new Player({
    player: 1,
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Katana', 'Gun', 'Bomb'],   
});

export const player002 = new Player({
    player: 2,
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Pig', 'Knife', 'Rifle'],
    
});

export default Player;
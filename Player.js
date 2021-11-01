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

export default Player;
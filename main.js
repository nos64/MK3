const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player001 = {
    player: 1,
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Katana', 'Gun', 'Bomb'],
    attack: function() {
        console.log(player001.name + ' ' + 'Fight...');
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
};

const player002 = {
    player: 2,
    name: 'SUB ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Pig', 'Knife', 'Rifle'],
    attack: function() {
        console.log(player002.name + ' ' + 'Fight...');
    },
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP,
};

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;
    
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    return $player;
}

$arenas.appendChild(createPlayer(player001));
$arenas.appendChild(createPlayer(player002));

function changeHP(randNum) {
    this.hp -= randNum;
    if (this.hp <=0) {
        this.hp = 0;
    }
    console.log(player001.hp);
    console.log(player002.hp);
}

function elHP() {
    const $playerLife = document.querySelector('.player' + this.player +' .life');
    console.log($playerLife);
    return $playerLife;
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
    console.log(player001.hp + '%');
    console.log(player002.hp + '%');
}

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' wins!';
    } else {
        $winTitle.innerText = ' DRAW';
    }
    
    return $winTitle;
}

$randomButton.addEventListener('click', function() {
    player001.changeHP(getRandom(20))
    player002.changeHP(getRandom(20))
    player001.renderHP()
    player002.renderHP()
    
    if (player001.hp === 0 || player002.hp ===0) {
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = "red";
    }
    
    if (player001.hp === 0 && player001.hp < player002.hp >0) {
        $arenas.appendChild(playerWins(player002.name));
    } else if (player002.hp === 0 && player002.hp < player001.hp >0) {
        $arenas.appendChild(playerWins(player001.name));
    } else if (player002.hp === 0 && player002.hp === 0) {
        $arenas.appendChild(playerWins());
    }
    if ($randomButton.disabled) {
        createReloadButton()
    }
});


function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $btnRestart = createElement('button', 'button');
    $btnRestart.innerText = 'Restart';
    $arenas.appendChild($reloadWrap);
    $reloadWrap.appendChild($btnRestart);
    
    $btnRestart.addEventListener('click', function() {
        window.location.reload()
    });
}



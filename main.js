const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $reloadPage = document.querySelector('.button-reload')

const player001 = {
    player: 1,
    name: 'Boris the Blade',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Katana', 'Gun', 'Bomb'],
    attack: function() {
        console.log(player001.name + ' ' + 'Fight...');
    }
};

const player002 = {
    player: 2,
    name: 'Brick Top',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Pig', 'Knife', 'Rifle'],
    attack: function() {
        console.log(player002.name + ' ' + 'Fight...');
    }
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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player +' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp)
    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = 0 + '%';
        console.log(player.hp)
        // $arenas.appendChild(playerLose(player.name));
        $randomButton.disabled = true;
        $randomButton.style.backgroundColor = "red";
    }
    showWinner()
}

// function playerLose(name) {
//     const $loseTitle = createElement('div', 'loseTitle');
//     $loseTitle.innerText = name + ' lose';

//     return $loseTitle;
// }

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' win!';

    return $winTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player001)
    changeHP(player002)
});


function showWinner() {
    if (player001.hp <= 0) {
        $arenas.appendChild(playerWin(player002.name));
    } else if (player002.hp <= 0) {
        $arenas.appendChild(playerWin(player001.name));
    }
}

$reloadPage.addEventListener('click', function() {
    window.location.reload()
});
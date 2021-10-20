const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player001 = {
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

const player002 = {
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

function changeHP(randNum) {
    this.hp -= randNum;
    if (this.hp <=0) {
        this.hp = 0;
    }
    // console.log(player001.hp);
    // console.log(player002.hp);
}

function elHP() {
    const $playerLife = document.querySelector('.player' + this.player +' .life');
    // console.log($playerLife);
    return $playerLife;
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
    // console.log(player001.hp + '%');
    // console.log(player002.hp + '%');
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

// $randomButton.addEventListener('click', function() {
//     player001.changeHP(getRandom(20))
//     player002.changeHP(getRandom(20))
//     player001.renderHP()
//     player002.renderHP()
    
//     if (player001.hp === 0 || player002.hp ===0) {
//         $randomButton.disabled = true;
//         $randomButton.style.backgroundColor = "red";
//     }
    
//     if (player001.hp === 0 && player001.hp < player002.hp >0) {
//         $arenas.appendChild(playerWins(player002.name));
//     } else if (player002.hp === 0 && player002.hp < player001.hp >0) {
//         $arenas.appendChild(playerWins(player001.name));
//     } else if (player002.hp === 0 && player002.hp === 0) {
//         $arenas.appendChild(playerWins());
//     }
//     if ($randomButton.disabled) {
//         createReloadButton()
//     }
// });

function createReloadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Restart';

    $arenas.appendChild($reloadButtonDiv);
    
    $reloadButtonDiv.appendChild($reloadButton);
    
    $reloadButton.addEventListener('click', function() {
        window.location.reload()
    });
}

$arenas.appendChild(createPlayer(player001));
$arenas.appendChild(createPlayer(player002));




function enemyAttack() {
  const hit = ATTACK[getRandom(ATTACK.length)-1];
  const defence = ATTACK[getRandom(ATTACK.length)-1];
//   console.log('###: hit', hit);
//   console.log('###: defence', defence);

  return {
      value: getRandom(HIT[hit]),
      hit,
      defence,
  }
  
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    // console.log('###: enemy', enemy);
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
    console.log('###: a', attack);
    console.log('###: e', enemy);
    
    if (attack.hit !== enemy.defence) {
        player002.changeHP(attack.value);
        player002.renderHP()
    }
    if (enemy.hit !== attack.defence) {
        player001.changeHP(enemy.value);
        player001.renderHP()
    }
    console.log(player001.hp);
    console.log(player002.hp);
    
    if (player001.hp === 0 || player002.hp ===0) {
        $randomButton.disabled = true;
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



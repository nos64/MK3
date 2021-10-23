const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


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

function playerAttack() {
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

function showResult() {
    if (player001.hp === 0 || player002.hp ===0) {
        $randomButton.disabled = true;
        createReloadButton()
    }
    if (player001.hp === 0 && player001.hp < player002.hp >0) {
        $arenas.appendChild(playerWins(player002.name));
        showEndMessage('end', player002);
    } else if (player002.hp === 0 && player002.hp < player001.hp >0) {
        $arenas.appendChild(playerWins(player001.name));
        showEndMessage('end', player001);
    } else if (player002.hp === 0 && player002.hp === 0) {
        $arenas.appendChild(playerWins());
        showEndMessage ('draw');
    }
}

function generateLogs(type, player1, player2, value) {
    const text = logs[type][getRandom(logs[type].length -1)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
    let el;
    switch (type) {
        case 'hit':
            el = `<p>${showTime()} - ${text} -${value} [${player2.hp}/100]</p>`;
            break;
        case 'defence':
            el = `<p>${showTime()} - ${text}</p>`;
            break;
    }
    return $chat.insertAdjacentHTML('afterbegin', el);
}

function showTime (){
    const date = new Date();

    const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);
    const time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}`;
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // if (hours < 10) {
    //     hours = `0${hours}`
    // }
    // if (minutes < 10) {
    //     minutes = `0${minutes}`
    // }
    // const timeEvent = hours + ':' + minutes;
    const el = `<p>${time}</p>`;
    return time;
}
      
function showStartMessage(type) {
    const text = logs[type].replace('[time]', showTime()).replace('[player1]', player001.name).replace('[player2]', player002.name);
    el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin',el);
}

function showEndMessage(type, player) {
    let text = logs[type][getRandom(logs[type].length -1)];
    if (player === player001) {
        text = logs[type][getRandom(logs[type].length -1)].replace('[playerLose]', player002.name).replace('[playerWins]', player001.name);
    } else if (player === player002) {
        text = logs[type][getRandom(logs[type].length -1)].replace('[playerLose]', player001.name).replace('[playerWins]', player002.name);
    } else {
        text = logs[type];
    }
    el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin',el);
}


$formFight.addEventListener('submit', function(e) {
    e.preventDefault('start');
   
    const enemy = enemyAttack();
    const player = playerAttack();
   
    if (player.defence !== enemy.hit) {
        player001.changeHP(enemy.value);
        player001.renderHP();
        generateLogs('hit', player002, player001, enemy.value);
    } else {
        generateLogs('defence', player002, player001);
    }

    if (enemy.defence !== player.hit) {
        player002.changeHP(player.value);
        player002.renderHP();
        generateLogs('hit', player001, player002, player.value);
    } else {
        generateLogs('defence', player001, player002);
    }
 
    showResult();
});

showStartMessage ('start');

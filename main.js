//Task #0

const player001 = {
    name: 'Boris the Blade',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['Katana', 'Gun', 'Bomb'],
    attack: function() {
        console.log(player1.name + ' ' + 'Fight...');
    }
};

const player002 = {
    name: 'Brick Top',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Pig', 'Knife', 'Rifle'],
    attack: function() {
        console.log(player2.name + ' ' + 'Fight...');
    }
};

// Task #1

function createPlayer(player1, player001) {
  const $arenas = document.querySelector('.arenas');

  const $player1 = document.createElement('div');
  $player1.classList.add(player1);
  $arenas.appendChild($player1);

  const $progressbar1 = document.createElement('div');
  $progressbar1.classList.add('progressbar')
  $player1.appendChild($progressbar1);

    const $life1 = document.createElement('div');
    $life1.classList.add('life');
    $life1.style.width = player001.hp + '%';
    $progressbar1.appendChild($life1);

    const $name1 = document.createElement('div');
    $name1.classList.add('name');
    $name1.innerText = player001.name;
    $progressbar1.appendChild($name1);

  const $character1 = document.createElement('div');
  $character1.classList.add('character');
  $player1.appendChild($character1);
     
    const $img1 = document.createElement('img');
    $img1.src = player001.img;
    $character1.appendChild($img1)
}

//Task #2

createPlayer('player1', player001);
createPlayer('player2', player002);
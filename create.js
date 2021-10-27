export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}
 
 export const createPlayer = ({player, hp, name, img}) => {
    const $player = createElement('div', `player${player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = hp + '%';
    $name.innerText = name;
    $img.src = img;
    
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    return $player;
}
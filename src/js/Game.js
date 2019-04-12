import Position from './Position';
import goblin from '../images/goblin.png';

class Game {
  constructor(map, time = 1000) {
    this.map = document.querySelector(map);
    this.position = new Position(this.map.children);
    this.time = time;
  }

  start() {
    const img = document.createElement('img');

    img.className = 'grid__image';
    img.dataset.item = 'goblin';
    img.src = goblin;

    this.intervalMovementPosition(img);
  }

  intervalMovementPosition(img) {
    setInterval(() => {
      const position = this.position.random();

      this.map.children[position].appendChild(img);
    }, this.time);
  }
}

export default Game;

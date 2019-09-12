import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head = new Cell(2, 0);
  tail = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = 'Right'
  tailSize = 2

  setDirection(direction: Direction) {
    if (direction === 'Left' && this.isSnake(new Cell(this.head.x - 1, this.head.y))) {
      this.direction = this.direction;
    }
    else if (direction === 'Right' && this.isSnake(new Cell(this.head.x + 1, this.head.y))) {
      this.direction = this.direction;
    }
    else if (direction === 'Up' && this.isSnake(new Cell(this.head.x, this.head.y - 1))) {
      this.direction = this.direction;
    }
    else if (direction === 'Down' && this.isSnake(new Cell(this.head.x, this.head.y + 1))) {
      this.direction = this.direction;
    }
    else {
        this.direction = direction
    }
    
  }

  move() {
    this.tail.push(this.head)
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    if (this.direction === 'Right') {
      this.head = new Cell(this.head.x + 1, this.head.y);
    }
    else if (this.direction === 'Down') {
      this.head = new Cell(this.head.x, this.head.y + 1);
    }
    else if (this.direction === 'Up') {
      this.head = new Cell(this.head.x, this.head.y - 1);
    }
    else if (this.direction === 'Left') {
      this.head = new Cell(this.head.x - 1, this.head.y);
    }
  }

  grow() {
    this.tailSize += 3
  }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    for (var i  = 0; i < this.tail.length; i++) {
      if (cell.x === this.tail[i].x && cell.y === this.tail[i].y){
        return true;
      }
    }
    return false;
  }

  getDirection(): Direction {
    return this.direction
  }

  getTail(): Cell[] {
    return this.tail;
  }
}

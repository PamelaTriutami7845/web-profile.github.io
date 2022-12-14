import {onSnake,expandSnake} from "./snake.js"
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const expantion_rate = 5


export function update()
{
    if(onSnake(food)){
        expandSnake(expantion_rate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard)
{
    // console.log('draw snake')
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }
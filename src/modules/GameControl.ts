/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-03-21 19:03:31
 */
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

class GameControl{
  //定义3个属性
  snake:Snake;
  food:Food;
  scorePanel:ScorePanel;
  //创建属性存储蛇的移动方向
  direction:string = '';
  //游戏是否结束
  isLive = true;
  constructor(){
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10,2);    
    this.init();
  }

  init(){
    //绑定键盘事件
    document.addEventListener('keydown',this.keydownHandler.bind(this));
    this.run();
  }

  //键盘按下相应函数
  keydownHandler(event:KeyboardEvent){
    //修改direction
    this.direction = event.key;
   
  }
  //创建一个控制蛇移动的方法
  run(){
    //根据方向使蛇的方向改变
    let X = this.snake.X;
    let Y = this.snake.Y;
    console.log("this.direction",this.direction);
    
    switch(this.direction){
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    //检查蛇是否吃掉了食物
    this.checkEat(X,Y)
    //修改蛇的X值和Y值
    try{
      //修改蛇的X和Y
      this.snake.X = X;
      this.snake.Y = Y;
    }catch(e){
      alert(e.message + 'GAME OVER');
      this.isLive = false
    }
    //开启一个定时调用
    this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1 )*30);
  }
  
  //定义一个方法，检查蛇是否吃掉了食物
  checkEat(X:number,Y:number){
    if(X === this.food.X && Y === this.food.Y){
      //实物的位置要进行重置
      this.food.change();
      //分数增加
      this.scorePanel.addSore();
      //蛇增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl;
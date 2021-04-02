/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-03-20 23:20:46
 */
class Snake{
  //表示蛇头的元素
  head:HTMLElement;
  //蛇的身体（包括舌头）
  bodies:HTMLCollection;
  //蛇的容器
  element:HTMLElement;
  constructor(){
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }

  set X(value){
    if(this.X === value){
      return;
    }
    //x值合法范围0-290
    if(value < 0 || value >290){
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    //向左移动，不能向右走，反之依然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      //console.log('发生掉头了');
      if(value > this.X){
        value = this.X - 10;
      }else{
        value = this.X + 10;
      }
    }

    //移动身体
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  
  set Y(value){
    if(this.Y === value){
      return;
    }
    //y值合法范围0-290
    if(value < 0 || value >290){
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      //console.log('发生掉头了');
      if(value > this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }

    //移动身体
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }

  //增加身体的方法
  addBody(){
    //向element中添加div
    let tempDiv = document.createElement('div');
    this.element.insertAdjacentElement("beforeend",tempDiv)
  }

  //添加一个蛇身体移动的方法
  moveBody(){
    // 将后面的身体设为前边身体的位置
    for(let i = this.bodies.length -1 ;i > 0;i--){
      //获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      //将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }

  checkHeadBody(){
    //获取所有身体，检查其是否和我们蛇头的坐标发生重叠
    for(let i=1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('撞到自己了');
      }
    }
  }
}

export default Snake;
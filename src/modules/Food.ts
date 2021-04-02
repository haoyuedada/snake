/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-03-20 17:30:03
 */
//定义食物类
class Food{
  // 定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor() {
    //获取页面中的food元素并且赋值给element
    this.element = document.getElementById('food')!;
  }
  //定义一个获取食物x轴坐标的方法
  get X(){
    return this.element.offsetLeft;
  }

  get Y(){
    return this.element.offsetTop;
  }
  //修改食物位置的方法
  change(){
    //生成随机的位置0-290，食物的坐标为整十
    let top = Math.round(Math.random()*29) * 10;
    let left = Math.round(Math.random()*29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}


//测试代码
// const food = new Food();
// food.change();
// console.log(food.X,food.Y);



export default Food;


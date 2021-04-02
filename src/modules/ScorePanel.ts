/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-03-20 23:17:26
 */
//定义表示记分牌的类
class ScorePanel{
  score = 0;
  level = 1;
  scoreEle : HTMLElement;
  levelEle : HTMLElement;

  //设置变量限制等级
  maxLevel:number;
  //设置变量多少分时升级
  upScore:number;
  constructor(maxLevel:number = 10,upScore:number = 10){
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  //设置一个加分的方法
  addSore(){
    this.scoreEle.innerHTML = ++this.score + '';
    //判断分数
    if(this.score % 10 === 0){
      this.levelUp();
    }
  }
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + '';
    }  
  }
}

export default ScorePanel;
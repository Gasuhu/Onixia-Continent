function addEnemys()
{
  enemy=PIXI.Sprite.from('./alien-ufo-pack/PNG/shipBlue_manned.png')
  enemy.name="Enemy"
  enemy.width*=0.75
  enemy.height*=0.75
  app.stage.addChild(enemy)
  enemy.x=Math.min(window.innerWidth,1536)-150
  enemy.y=Math.random()*(Math.min(window.innerHeight,713)-100)
}
let temp2=0
app.ticker.add((delta) => {
 temp2+=delta
 if(temp2>100)
 {
    temp2=0
    addEnemys()
 }
 for(var i=1;i<app.stage.children.length;i++)
 { 
   
   if(app.stage.children[i].name!=null)
     {
       if(app.stage.children[i].name=="Enemy") app.stage.children[i].x-=2.5
     }
 }
});
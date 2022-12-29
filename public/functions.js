let up,down,left,right,shoot=false
document.addEventListener("keydown",function(e){

  if(e.keyCode ==83)
    down=true
  if(e.keyCode ==90)
    up=true  
  if(e.keyCode ==81)
    left=true
  if(e.keyCode ==68)
    right=true
  if(e.keyCode == 0 || e.keyCode == 32)
    shoot=true 
})
document.addEventListener("keyup",function(e){

  if(e.keyCode ==83)
    down=false
  if(e.keyCode ==90)
    up=false
  if(e.keyCode ==81)
    left=false
  if(e.keyCode ==68)
    right=false
  if(e.keyCode == 0 || e.keyCode == 32)
    shoot=false 
})
let temp=35
app.ticker.add((delta) => {
  temp+=delta
  if(up==true&playerCon.y>-30)
    playerCon.y-=2
  if(down==true&playerCon.y<Math.min(window.innerHeight,713)-100)
    playerCon.y+=2
  if(left==true&playerCon.x>0)
    playerCon.x-=2
  if(right==true&playerCon.x<Math.min(window.innerWidth,1536)-180)
    playerCon.x+=2
  if(shoot)
  {
    if(temp>35)
    {
      temp=0
      PlayerShoot()
    }
  }
  for(var i=1;i<app.stage.children.length;i++)
  { 
    
    if(app.stage.children[i].name!=null)
      {
        if(app.stage.children[i].name=="Shoot") app.stage.children[i].x+=5
      }
  }

});
let playerCon=new PIXI.Container()

function countainer()
{
let player = PIXI.Sprite.from('./Assets/PNG_Parts&Spriter_Animation/Ship3/Ship3.png')

playerCon.addChild(player)
app.stage.addChild(playerCon)
playerCon.x=300
playerCon.y=100
const textures = []
for (var i =0;i<3;i++)
  {
    const texture=PIXI.Texture.from(`./Assets/PNG_Animations/Exhaust/Ship3/Normal_flight/Ship3_normal_flight_00${i*2+1}.png`) 
    textures.push(texture)
  }
const turboPlayer = new PIXI.AnimatedSprite(textures)
turboPlayer.position.set(-7,48)
playerCon.addChild(turboPlayer)
turboPlayer.play()
turboPlayer.animationSpeed=0.15
}
function PlayerShoot()
{ 
  const textures = []
  for (var i =1;i<4;i++)
  {
    const texture=PIXI.Texture.from(`./Assets/PNG_Animations/Shots/Shot3/shot3_${i}.png`) 
    textures.push(texture)
  }
  const shooting = new PIXI.AnimatedSprite(textures)
  playerCon.addChild(shooting)
  shooting.play()
  shooting.position.set(107,37.8)
  shooting.animationSpeed=0.15
  shooting.onFrameChange = function (number) {
    if(number==0)
      {
      creatShoot(shooting.x,shooting.y)
      shooting.destroy()
      }

  };

 
}
function creatShoot(x,y)
{
  let shoots=PIXI.Sprite.from('./Assets/PNG_Animations/Shots/Shot3/shot3_asset.png')
  shoots.name="Shoot"
  app.stage.addChild(shoots)
  shoots.x=playerCon.x+x+13
  shoots.y=playerCon.y+y
}



countainer()
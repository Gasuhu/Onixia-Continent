let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight-1});
document.body.appendChild(app.view);

function colorFullBackGround(app)
{
n=5500;
for(i=0;i<n;i++)
{
let block = new PIXI.Sprite(PIXI.Texture.WHITE);
block.x=Math.random()*window.innerWidth
block.y=Math.random()*window.innerHeight-1
block.height=0.5
block.width=0.5
app.stage.addChild(block)
}
}
colorFullBackGround(app);
let cor;
let circuloX; // horizontal
let circuloY; // vertical

let posicaoHorizontal2; // x
let posicaoVertical2; // y

function setup() {
  
  createCanvas(400, 400);// weidth x height
  background(color(125, 0, 0)); 
  cor = color(random(0, 225), random(0, 225), random(0, 225));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
  
// circuloX = 0, 0, 0
// circuloY = 300, 150, 50
}

function draw() {
  
 fill (cor)
 
  //console.log(circuloX.lenght);
  for(let contador in circuloX) {
   // console.log(contador);
    circle (circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);  
    circuloY[contador] += random(-3, 3);
    
    if(circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
     }
 }
  
  if(mouseIsPressed) {
  cor = color(random(0, 225), random(0, 225), random(0, 225),
  random (0, 100));
 }   
        
}
/* global fill draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;

draw = function() {
  
 //dots within the circles//
   strokeWeight(weight);
   stroke(4, 6, 28);
   fill(225 ,181, 200);
   ellipse(height - xPos, yPos, 30, 30);
   weight++;
   
   //middle cicrles//
  strokeWeight(weight);
   stroke(57,60,214);
    fill (0, 590, 247);
   ellipse(height -  xPos, 215, 89,80);
   weight++;
  
  
   strokeWeight (3);
   stroke (57,0,214);
fill (10, 90, 45);
   ellipse(xPos,yPos,30,30);
   xPos = yPos + 40;
   yPos = xPos +30;
 
 //surrounding circles//
   strokeWeight (weight);
    stroke (57,0,240);
    fill (210, 210, 216);
   ellipse (height - xPos, yPos, 80, 70);
   weight++;
  
   
    

strokeWeight (weight);
    stroke (59 ,23 ,4);
    fill (255, 38 , 96);
   ellipse(height - xPos, yPos, 30, 30);
   weight++;



};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

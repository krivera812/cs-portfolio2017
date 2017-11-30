/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


background (135, 206, 250);
rect (0, 352, 399, 470);

drawBear = function(x,y) {

//head//
fill(255, 255, 255);
ellipse(x-30, y-30, 70, 70);

//feet//
fill(255,255,255);
ellipse(x-60, y-5, 15, 15);
ellipse(x, y-5, 15, 15);


//ears//
fill(255, 255,255);
ellipse(x-65 , y-60, 25,25);
ellipse(x+5, y-60, 25,25);
fill(224, 255, 255);
ellipse(x-63, y-55, 15, 15);
ellipse(x+3, y-55, 15, 15);

//muzzle//
fill(224, 255 ,255);
ellipse (x-30, y-20, 35, 27);
fill(0,0,0);
ellipse (x-30, y-30, 10,5);

//eyes//
ellipse(x-45, y-30, 5, 5);
ellipse(x-15, y-30,5,5);
    
    
};    

mouseClicked = function(){
drawBear(mouseX, mouseY);
}

 
    
    
draw = function(){
   
}
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);


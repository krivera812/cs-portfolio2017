/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
   background ();
ellipse (mouseX, mouseY, 30, 30);
    //changes looks of shape depending on the position//
    //right side mouse//
    if (mouseX >133){ 
      
        fill (225, 220, 250);
        strokeWeight(3);
        stroke (57);
    }
    
    //left side mouse//
else {
   
    fill (189, 125, 181);
    strokeWeight(2);
    stroke (57);
}
    //rectangle//
    rect(mouseX, mouseY, 30, 45);
 
 //top//
    if (mouseY < 200){
        fill(213, 102, 74);
        strokeWeight(3);
        stroke (57);
    }
//bottom//
else {
    ellipse (30, 30, 50, 50 );
    fill(194, 149, 76);
    strokeWeight(3);
    stroke (57);
    
    
}
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);



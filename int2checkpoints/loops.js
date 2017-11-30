/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(153, 255, 153);

for(var i = 0; i < width; i += 45){
    for (var j = 0; j < height; j += 30 ){
     var size = random(30);
     fill (random(0), random (204), random (204));
     stroke (random(255), random(204), random (153));
     ellipse (i, j, random (30), random(30));
     
    }
}

for(var i =0; i < width; i+=30){
    for(var j = 0; j < height; j+=30)
    var size = random (30);
    ellipse(i, j, size, size)
}
draw = function() {

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);


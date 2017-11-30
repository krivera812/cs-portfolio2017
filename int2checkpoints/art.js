/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


background(255, 228, 238);


//loop in background//
for(var i= 0; i < width; i+=30){
    for(var j=0; j < height; j+=30){
        var size = random(30);
        fill (255, 228, 238);
        stroke();
        ellipse (i, j, size, size);
    }
};


//peach//

//stem//
fill(238,223, 204);
stroke();
rect(181, 125, 5, 45);

//leaf//
fill(153,255, 153);
stroke();
ellipse(195, 128, 20, 5);

//body//
fill(255, 218, 185);
stroke();
ellipse(200, 200, 130, 130);

fill(255, 228, 181);
ellipse(190, 200, 135, 130);

fill(255, 218, 185);
ellipse(180, 193, 100, 115);

fill(255, 228,181);
ellipse(168, 200, 115, 130);


//function- says a phrase when clicked//
drawPeach = function(x, y){
    
    text("stay peachy", x, y)
}
mouseClicked = function(){
    drawPeach(mouseX, mouseY) 
    
};

//conditions-change the color of text depending on position//
draw = function(drawPeach){
    if (mouseX > 200){
        fill (229, 163, 110);
        
    }
    else {
        fill (225, 215, 100);
    }
    
};


// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

 function setup(){
     canvas=createCanvas(800,500);
     canvas.center();
 }
 img="";
 function preload(){
     img= loadImage("balcony.jpg");
 }
 function draw(){
     image(img,0,0,800,500);
     fill("red");
     textSize(25)
     text("Grill",200,80,40,30)
     noFill();
     stroke("red");
     strokeWeight(2);
     rect(200,80,500,50);
     text("Pots",190,350,10,54);
     noFill();
     stroke("red");
     rect(170,300,400,100);
 }
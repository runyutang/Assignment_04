function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
 
}

function draw() {
  translate(width/2,height/2);
  rotate(-90);
  background('#F9FFEA');
  
  if (hour() > 12){
    var nhour = hour() - 12;
  } else {
    var nhour = hour();
  }
  hpara = nhour * 30;
  mpara = minute()*6;
  spara = second()*6
  
  var diameter = 0;
  if(width > height){
    diameter = height;
    } else {
      diameter = width;
    }
  //console.log(hpara);
  clockHand(hpara,diameter*0.4,diameter/50,'#649DAD');
  clockHand(mpara,diameter*0.6,diameter/80,'#66C6BA');
  clockHand(spara,diameter*0.8,diameter/125,'#C8F4DE');
  //noFill();
  //ellipse(0,0,400,400);
}

function clockHand(para,size,weight,color){
  noFill();
  strokeWeight(weight);
  stroke(color);
  arc(0,0,size,size,0,para);
  
  stroke(220,220,220,50);
  ellipse(0,0,size,size);
  }
  
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
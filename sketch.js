function setup() {
  createCanvas(500,500);
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
  
  //console.log(hpara);
  clockHand(hpara,200,10,'#649DAD');
  clockHand(mpara,300,6,'#66C6BA');
  clockHand(spara,400,4,'#C8F4DE');
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
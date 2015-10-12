var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1280,
  // debug: true
});

//background
r.rect(0, 0, r.width, r.height).fill(34, 42, 73).stroke(false);

function drawUmbrella(){
var umbrella = r.path(200, 300)
  .fill(149, 157, 190)
  .stroke(false)
//draw the ellipse
  .curveTo(30, -200, 370, -200, 400, 0)
  .closePath()
//draw the top triangle
  .moveTo(197, -150)
  .lineTo(200, -200)
  .lineTo(203, -150)
//draw the handle
  .moveTo(203, 0)
  .lineTo(203, 100)
  .curveTo(183, 130, 153, 100)
  .curveTo(183, 125, 197, 100)
  .lineTo(197, 0)
}

//draw each single rain lines and cirles
function drawOneRainFace(posX){
  var length = Rune.random(4, 25);
  length = Math.round(length);
  var oneRain = r.path(posX, 300)
  .stroke(225)
  .fill(225)
  .lineTo(0, 0)
  for (var i = 0; i < length; i++){
    oneRain.lineTo(Rune.random(-1, +1), 20*i + 20 + Rune.random(-3, +3))
    .moveTo(Rune.random(-1, +1), 20*i + 25 + Rune.random(-3, +3))
  }
  var randomShow = Rune.random(10, 50);
  r.circle(posX + Rune.random(-5,5), 300+25+20*(length-1) + 3 + Rune.random(-3,3), Rune.random(7,15))
  .stroke(false)
  .fill(34+randomShow, 42+randomShow, 73+randomShow)

  var randomShow1 = Rune.random(50, 100);
  r.circle(posX + Rune.random(-5,5), 300+25+20*(length-1) + 3 + Rune.random(-3,3), Rune.random(7,15))
  .stroke(false)
  .fill(34+randomShow1, 42+randomShow1, 73+randomShow1)

  r.circle(posX, 300+25+20*(length-1) + 3, Rune.random(4,10))
  .stroke(255)
  .fill(255)
}

function drawcup(){
  for(var i=0; i<20; i+=0.1){
    var cup = r.path(200, 800 + 10*i)
//draw many cups with differet color to compose the fading color cup
    .curveTo(30, 280, 370, 280, 400, 0)
    .fill(34+115-i*5, 42+115-i*5, 73+115-i*5)
    .stroke(false)
    .closePath();
  }

//draw cupoutline
  var cupOutline = r.path(0, 800)
  .fill(34, 42, 73)
  .stroke(34, 42, 73)
  .lineTo(0, 0)
  .lineTo(200, 0)
  .curveTo(230, 280, 570, 280, 600, 0)
  .lineTo(r.width, 0)
  .lineTo(r.width, r.height - 800)
  .lineTo(0, r.height - 800)
  .closePath();
//draw the handle
var cupBigHandle = r.path(200, 800)
  .fill(34+115-50, 42+115-50, 73+115-50)
  .stroke(false)
  .moveTo(397, 20)
  .curveTo(455, 0, 455, 100, 365, 110)
var cupSmallHandle = r.path(200, 800)
  .fill(34, 42, 73)
  .stroke(34, 42, 73)
  .moveTo(395, 40)
  .fill(34, 42, 73)
  .curveTo(435, 0, 435, 100, 373, 90)
  .lineTo(395, 40)
}


drawUmbrella();
//draw rain from (200, 300) to (600, 300)
//left side
for(var i = 0; i < 9; i++){
  drawOneRainFace(220 + 20*i);
}
//right side
for(var i = 0; i < 9; i++){
  drawOneRainFace(420 + 20*i);
}

drawcup();
r.draw();

function save() {
    var svg = document.querySelector('svg');
    svg.setAttribute("version", "1.1");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    
    //SVG element should be the only child of the parent container
    var html = svg.parentNode.innerHTML;
    
    var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
    
    //trigger download
    var a = document.createElement('a');
    a.download = "image.svg";
    a.href = imgsrc;
    document.body.appendChild(a);
    a.click();
    
}
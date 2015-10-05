var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1280,
  debug: true
});

var centrX = 400;
var centrY = 792.5;
var size = 5;

var circleCenX = 400;
var circleCenY = 405;
var circleRad = 10; 
var sizeCircle = 1;


for(var i = 245; i > 10; i -= size){
r.triangle(centrX - i, centrY - i, centrX, centrY + i, centrX + i, centrY - i)
  .fill(false)
  .strokeWidth(0.5)
  .stroke(0)
}

for(var j = 3; j <= 57; j += sizeCircle){
r.ellipse(circleCenX, circleCenY, circleRad * j, circleRad * j)
  .fill(false)
  .strokeWidth(0.5)
  .stroke(0)
}
for(var j = 3; j <= 57; j += sizeCircle){
r.triangle(circleCenX, circleCenY - circleRad * j / 2, circleCenX - circleRad * j * Math.sqrt(3) / 4, circleCenY + circleRad * j / 4, circleCenX + circleRad * j * Math.sqrt(3)/ 4, circleCenY + circleRad * j / 4)
  .fill(false)
  .strokeWidth(0.5)
  .stroke(0)
}

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
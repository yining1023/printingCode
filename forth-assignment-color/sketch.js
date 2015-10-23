var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1280,
  // debug: true
});

//background
r.rect(0, 0, r.width, r.height).fill(192, 192, 192).stroke(false);

//black ground
var ground = r.path(0, 1130)
    .fill(30)
    .lineTo(0, 0)
    .lineTo(800, 50)
    .lineTo(800, 150)
    .lineTo(0, 150)
    .closePath();

r.line(400, 1155, 400, 0).stroke(255, 0, 0);

var points = [0];

for(var i = 1; i < 6; i++){
  points[i] = Math.floor(Rune.random(400, 1155));
}

points = points.sort(function(a, b){
  return a - b;
});

points[6] = 1155;

console.log(points);

var numbers = [50, 4, 10, 8, 6, 4];
var radius = 100;

for(var i = 0; i < numbers.length; i++) {

  // var shape = r.polygon(r.width/2, 125 + (i * 200));
  // for(var i = 0; i < points.length -1; i++){
    shape = r.polygon(400-i*10, points[i]+(points[i+1]-points[i])/2);//(points[i+1]-points[i])/2).fill(0, 255, 0);
  // }

  var spacing = 360/numbers[i];
  var radius = (points[i+1]-points[i])/2;

  for(var j = 0; j < numbers[i]; j++) {
    var x = Math.cos(Rune.radians(j * spacing)) * radius;
    var y = Math.sin(Rune.radians(j * spacing)) * radius;
    shape.lineTo(x, y);
  }

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
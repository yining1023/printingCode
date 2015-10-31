var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill("#253255").stroke(false);
for(var m = 0; m < 120; m++){
  r.rect(0, r.height - 120 + m, r.width, 120 - m).fill('hsv', 224, 56, 33-33/120*m).stroke(false);
}
for(var m = 0; m < 120; m++){
  r.rect(0, m, r.width, 120 + m).fill('hsv', 224, 56, 66 - m*33/120).stroke(false);
}

var f = new Rune.Font("Roboto-Regular.ttf");

f.load(function(err) {
// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
var grid = r.grid({
  x: 0,
  y: 150,
  width: r.width,
  height: r.height - 300,
  // gutter: 10,
  columns: 10,
  rows: 10
});

var grid1 = r.grid({
  x: 100,
  y: 0,
  width: r.width-200,
  height: r.height,
  // gutter: 10,
  columns: 1,
  rows: 6
});

var title = r.text("NORWEGIAN WOOD", 0, -1.2)
  .fill("#b9bccf")
  .stroke(false)
  .fontSize(38)
  .fontFamily("Book Antiqua")
  .fontWeight("bold")

var author = r.text("HARUKI MURAKAMI", -1.5, 27.5)
  .fill("#b9bccf")
  .stroke(false)
  .fontSize(45)
  .fontFamily("Courier New")

grid1.add(title, 1, 2);
grid1.add(author, 1, 6);

var size = 10;

var col = Math.round(Rune.random(1, 10));
var row = Math.round(Rune.random(1, 10));
// var col = 3;
// var row = 7;

for(var i = 1; i < 11; i++)
{
  for(var j = 1; j < 11; j++){
    var height = Rune.random(20, 30);

    var h2 = Rune.random(235, 225);
    var s2 = Rune.random(45, 60);
    var v2 = Rune.random(10, 25);

    var line1 = r.line(30, height+7, 30, height+17).strokeWidth(2);

    var tree2 = r.triangle(30, 0, 20, height, 40, height)
    .fill('hsv', h2, s2, v2)
    .stroke(false);
    var tree22 = r.triangle(30, 7, 20, height+7, 40, height+7)
    .fill('hsv', h2, s2, v2)
    .stroke(false);

    grid.add(tree2, i, j);
    grid.add(tree22, i, j);
    grid.add(line1, i, j);
  }
}

var background = r.rect(0, 0, 60, 50).fill("#253255").stroke(false);
var roof = r.triangle(30, 0, 15, 20, 45, 20).fill(19, 26, 45).stroke(false);
var house = r.rect(15, 20, 30, 20).fill(1, 7, 23).stroke(false);
var light1 = r.rect(32, 25, 8, 6).fill(254, 200, 30).stroke(false);
grid.add(background, col, row);
grid.add(roof, col, row);
grid.add(house, col, row);
grid.add(light1, col, row);

for(var k = 0; k < 100; k++){
  var light = r.rect(35+k*0.1, 25+k*0.1, 6+k*0.1, 6+k*0.1).fill(254, 200, 30, 0.01).stroke(false);
  grid.add(light, col, row);
}

r.draw();

});

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
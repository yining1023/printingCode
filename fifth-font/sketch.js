var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill("#12A5F4").stroke(false);

var f = new Rune.Font("Roboto-Regular.ttf");

var polysCount = {
  A: 2,
  B: 3,
  C: 1,
  D: 2,
  E: 1,
  F: 1,
  G: 1,
  H: 1,
  I: 1,
  J: 1,
  K: 1,
  L: 1,
  M: 1,
  N: 1,
  O: 2,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 1,
  U: 1,
  V: 1,
  W: 1,
  X: 1,
  Y: 1,
  Z: 1
};

// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {

  var allLetters = Object.keys(polysCount);

  // newLine("ABCDE", 1);
  newLine("ABCDE", 1);

});

function newLine(text, lineNumber){
  var path = f.toPath(text, 150, 200, 200)
    .fill(255);

  var circleSpacing = 200;
  var letterSpacing = 70;

  // convert the path to polygons.
  var polys = path.toPolygons({ spacing:2 });

  if(polys.length !== text.length) {
    for (var i = 0; i < text.length; i++) {
      if(polysCount[text[i]] > 1) {
        polys.splice(i+1, polysCount[text[i]] - 1 );
      }
    }
  }

  // loop through the points
  for(var i = 0; i < polys.length; i++) {

    var poly = polys[i];
    poly.move(0, 200, true);
    var circlePoints = [];
    for(var angle = 0; angle <= Math.PI*2; angle+=Math.PI*2/poly.vars.vectors.length){ 
      circlePoints.push({
        x: Math.cos(angle)*100 + (circleSpacing*i) + 210,
        y: Math.sin(angle)*100 + 330
      });
    }

    for(var j = 0; j < poly.vars.vectors.length; j++) {
      var vec = poly.vars.vectors[j];
      var letterPoints = {
        x: poly.vars.x + vec.x + letterSpacing*i,
        y: poly.vars.y + vec.y
      };
      r.line(circlePoints[j].x, circlePoints[j].y, letterPoints.x, letterPoints.y)
        .stroke(255,0.6);
    }

  }
  r.draw();
}

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
var r = new Rune({
  container: "#canvas",
  width:  800,
  height: 1200,
  // debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill("#6dcff6");

var pointnum = 40;
var sizeMax = 15;

for(var i = 0; i<pointnum; i++){
  var x = Rune.random(0, r.width);
  var y = Rune.random(0, r.height);
  var size = Rune.random(0.1, sizeMax);
  for(var j=0; j<1; j++){
    var xx = Rune.random(0, r.width);
    var yy = Rune.random(0, r.height);
    r.line(x, y, xx, 0).stroke(55+size*200/sizeMax).strokeWidth(2*size/sizeMax)
    r.line(x, y, 0, yy).stroke(55+size*200/sizeMax).strokeWidth(2*size/sizeMax)
    r.line(x, y, xx, r.height).stroke(55+size*200/sizeMax).strokeWidth(2*size/sizeMax)
    r.line(x, y, r.width, yy).stroke(55+size*200/sizeMax).strokeWidth(2*size/sizeMax)
  }
  for(var j=0; j<5; j++){
    // r.circle(x+Rune.random(-size/4, size/4), y+Rune.random(-size/4, size/4), size-j*size/5).fill(55+size*200/sizeMax+j*20).stroke(false)
    r.circle(x+Rune.random(-size/8, size/8), y+Rune.random(-size/8, size/8), size-j*size/11).fill(230+j*5).stroke(false)
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

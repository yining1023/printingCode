var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 600,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill("#00a9e0").stroke(false);

r.rect(50, 100, 500, 70).stroke(false).fill("#003a72");
r.rect(r.width/2-35, 100, 70, 300).stroke(false).fill("#003a72");
r.circle(90, 250, 40).stroke(false).fill("#ffffff");
r.circle(510, 250, 40).stroke(false).fill("#ffffff");

r.circle(80, 220, 50).stroke(false).fill("#00a9e0");
r.circle(500, 220, 50).stroke(false).fill("#00a9e0");

var wave = r.path(50, 380)
  .fill("#ffffff").stroke(false)
  .curveTo(r.width/2-50-120, 130, r.width/2-50+120, 130, 500, 0)
  .curveTo(r.width/2-50+150, 200, r.width/2-50-150, 200, 0, 0)
  // .closePath();

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
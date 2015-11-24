var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 900,
  // debug: true
});

var path1 = r.path(50, 100).fill(false);
var path2 = r.path(50, 300).fill(false);
var path3 = r.path(50, 500).fill(false);

var noise = new Rune.Noise();

for(var i = 0; i < 500; i++){
  if(i==0){
   path1.moveTo(i*20, Rune.random(100));
  }else{
   path1.lineTo(i*20, Rune.random(100));
 }
}

for(var i = 0; i < 500; i++){
  path2.lineTo(i*20, (i % 2)*100);
}

for(var i = 0; i < 500; i++){
  if(i==0){
    path3.moveTo(0, noise.get(0)*100);
  }else{
    path3.lineTo(i*20, noise.get(i/5)*100);
    noise.noiseDetail(1);
 }  
}

var poly = r.polygon(50, 650)
.lineTo(100, 0)
.lineTo(0, 200)
.lineTo(200, 200)
.fill(false);

var poly2 = poly.toPolygon({ spacing: 25 })
  .move(300, 0, true);

poly2.vars.vectors[4].x +=100;



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
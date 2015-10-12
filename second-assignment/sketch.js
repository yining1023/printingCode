var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1280,
  debug: true
});


function drawTriangle(){
  var triX = 800*Math.random(), 
      triY = 800*Math.random(),
      degree = Math.random()*90;
      

  r.triangle(triX, triY, triX+100, triY, triX+100, triY+100)
    .fill(0)
    .rotate(degree, 400, 640);
}


function drawRect(){
  var rectX = 20*Math.random(), 
      rectY = 800*Math.random(), 
      rectWidth = 10, 
      rectHeight = 20*Math.random()+100, 
      degree = Math.random()*90;

  r.rect(rectX, rectY, rectWidth, rectHeight)
    .fill(0)
    .rotate(degree, 400, 640);
}


for(var i = 0; i < 15; i++){
  drawRect();
  drawTriangle();
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
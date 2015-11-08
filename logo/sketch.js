var r = new Rune({
  container: "#canvas",
  width: 3600,
  height: 2200
});

var a = 60;
var b = 120;
var c = 180;
var d = 240;

var wid = 25;
var longer = 30;
var angel = 0;

r.rect(0, 0, r.width, r.height).
  fill("#ff8a8e");

for (var y = 0; y <= r.height; y += c)
{
  for (var x = 0; x <= r.width; x += d)
  {
    var centerX = x;
    var centerY = y;
    // var centerX = r.width/2;
    // var centerY = r.height/2;

    // shift every other row to the left to
    // fit inside the row above.
    if((y/c) % 2 == 0) {
      centerX -= b;
    }

//top side
    r.polygon(centerX, centerY)
      .fill("#fffcff")
      .stroke(false)
      .lineTo(-b, -b)
      .lineTo(-b+wid*2/Math.sqrt(5), -b-wid/Math.sqrt(5))
      .lineTo(0, -c+b-wid)
      .lineTo(b-wid*2/Math.sqrt(5), -b-wid/Math.sqrt(5))
      .lineTo(b, -b)
      .lineTo(0, -a);    

//left side
    r.polygon(centerX, centerY)
      .fill(30)
      .stroke(false)
      .lineTo(-b, -b)
      .lineTo(0, -a)
      .lineTo(0, a + longer)
      .lineTo(-wid, a-wid/2 + longer)
      .lineTo(-wid, -a+wid/2)
      .lineTo(-b, -b+wid);

//right side
    r.polygon(centerX, centerY)
      .fill("#adeed1")
      .stroke(false)
      .lineTo(b, -b)
      .lineTo(b, -b+wid)
      .lineTo(wid, -a+wid/2)
      .lineTo(0+wid, a-wid/2 + longer)
      .lineTo(0, a + longer)
      .lineTo(0, -a);

//white top 1
    r.polygon(centerX, centerY)
      .fill("#fffcff")
      .stroke(false)
      .lineTo(b, -b+wid)
      .lineTo(b + wid, -b+wid+wid/2)
      .lineTo(wid + wid, -a + wid)
      .lineTo(wid, -a+wid/2)

//black left
    r.polygon(centerX, centerY)
      .fill(30)
      .stroke(false)
      .lineTo(wid + wid, -a + wid)
      .lineTo(wid, -a+wid/2)
      .lineTo(0+wid, a-wid/2 + longer)
      .lineTo(wid*2, a + longer)

//pink to vocer black left
r.polygon(centerX, centerY)
      .fill("#ff8a8e")
      .stroke(false)
      .lineTo(wid + wid, -a + wid +60)
      .lineTo(wid, -a+wid/2 + 60)
      .lineTo(0+wid, a-wid/2 + longer -32.5)
      .lineTo(wid*2, a + longer -32.5) 

//white top 2
    r.polygon(centerX, centerY + 93)
      .fill("#fffcff")
      .stroke(false)
      .lineTo(b, -b+wid)
      .lineTo(b + wid, -b+wid+wid/2)
      .lineTo(wid + wid, -a + wid)
      .lineTo(wid, -a+wid/2)

//letter "s" on the right side
    r.polygon(centerX + wid, centerY + wid/2)
      .fill("#adeed1")
      .stroke(false)
      .lineTo(b, -b+wid)
      .lineTo(b, -b+2*wid+7.5)
      .lineTo(wid+25, -a+wid/2+20+7.5)
      .lineTo(b, -b+2*wid + 30+7.5)
      .lineTo(b, 0 + longer)
      .lineTo(wid, a + longer - wid/2)    
      .lineTo(wid+wid-25, -a+wid/2+20 + 72.5)
      .lineTo(b-25, -b+2*wid + 5 + 72.5)
      .lineTo(wid+wid-25, -b+2*wid + 10 + 72.5)
      .lineTo(wid, -a + wid/2);

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
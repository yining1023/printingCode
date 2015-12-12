var r = new Rune({
  container: "#canvas",
  width: 2600,
  height: 4000,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill(30).stroke(false);
// r.rect(0, 0, r.width, r.height).fill("#ffffff").stroke(false);

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  // gutter: 10,
  columns: 1,
  rows: 10000
});

var fullMessage;
var color1 = new Rune.Color(0, 174, 239);
var color = new Rune.Color(244, 154, 193);
var radius = 480;
var radius2 = 240;

var points = 240;
var spacing = 360/points;

var col = 0.15;

var floor = 0;
var miss = 0;
var haha = 0;
var doing = 0;
var home = 0;

$.getJSON('fullMessage.json')
   .done(function (data) {
       fullMessage = data;
       // console.log(fullMessage[2].text);
       // console.log(fullMessage[2].text.length);
       // console.log(fullMessage.length);
       
    // for(var j = 1; j < 101; j++)
    // {
    //   for(var i = 1; i < 101; i++){
      for(var i = 0; i < 10000; i++){
        if(i==9999){
          console.log(miss);
          console.log(home);
          console.log(haha);
          console.log(floor);
          console.log(doing);
        }
        var name = fullMessage[i].author;
        var text = fullMessage[i].text;
        var time = fullMessage[i].timestamp;
        var textLength = text.length;

        var date = new Date(time*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // var minutes = date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

          // console.log(hours);
        
        // console.log(hours);
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        // console.log(formattedTime);
        // console.log(seconds);
        // console.log(minutes);

        if(name == "Yining  Shi"){
          if(text.toLowerCase().indexOf("i miss you") > -1 ||
            text.toLowerCase().indexOf("i missed you") > -1) {

            var color = new Rune.Color("#ed145b", 0.4);
            var colorLine = new Rune.Color("#ed145b", col);
            var xWord = 1100;
            //red color
            miss++;
          }
          else if(text.toLowerCase().indexOf("home") > -1){
            var color = new Rune.Color("#3568db", 0.4);
            var colorLine = new Rune.Color("#3568db", col);
            var xWord = 1200;
            // console.log(text);
            home++;
          }
          else if(text.toLowerCase().indexOf("haha") > -1){
            // var color = new Rune.Color("#36aa09", 0.3);
            var color = new Rune.Color("#fff568", 0.4);
            var colorLine = new Rune.Color("#fff568", col);
            var xWord = 1300;
            // console.log(text);
            haha++;
          }
          else if(text.toLowerCase().indexOf("floor") > -1){
            var color = new Rune.Color("#fe9001", 0.4);
            var colorLine = new Rune.Color("#fe9001", col);
            var xWord = 1400;
            // console.log(text);
            floor++;
          }
          else if(text.toLowerCase().indexOf("what are you doing") > -1 || text.toLowerCase().indexOf("whatcha doin") > -1){
            var color = new Rune.Color("#82ca9c", 0.4);
            var colorLine = new Rune.Color("#82ca9c", col);
            var xWord = 1500;
            doing++;
          }
          else{
            var color = new Rune.Color(244, 154, 193, 0.2);
            var colorLine = new Rune.Color(244, 154, 193, col);
            var xWord = 0;
            // console.log(text);
          }

          if(hours >= 0 && hours <= 11){
            radius = 480;
            randomPos = Rune.random(-90,90);
          }
          else if(hours >= 12 && hours <= 23){
            radius = 960;
            hours -= 12; 
            randomPos = Rune.random(-110,110);
          }
          
          radius += randomPos;
          var size = 20 + textLength/10;
          var x = r.width/2+Math.cos(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius;
          var y = -400+r.height/2+Math.sin(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius;

          // console.log(hours);
          // console.log(2*hours*10 * spacing);
          // console.log(hours*10 * spacing - 90);
          // console.log(Rune.radians(hours*10 * spacing - 90));

          var tree2 = r.circle(x, y, size)
            .fill(color)
            .stroke(false);

          if(xWord !== 0){
            // var line = r.line(x, y, xWord, 3800)
            //   .stroke(color);
            var path = r.path(x, y)
              .curveTo(xWord-x, 1900-y, xWord-x, 3800-y)
              .stroke(colorLine)
              .fill(false);
          }
        }

        else if(name == "Sagar Mohite"){
          if(text.toLowerCase().indexOf("i miss you") > -1 ||
            text.toLowerCase().indexOf("i missed you") > -1) {

            var color2 = new Rune.Color("#ed145b", 0.4);
            var colorLine2 = new Rune.Color("#ed145b", col);
            var xWord2 = 1100;
            miss++;
            //red color
          }
          else if(text.toLowerCase().indexOf("home") > -1){
            var color2 = new Rune.Color("#3568db", 0.4);
            var colorLine2 = new Rune.Color("#3568db", col);
            var xWord2 = 1200;
            home++;
            //purple
            // console.log(text);
          }
          else if(text.toLowerCase().indexOf("haha") > -1){
            // var color2 = new Rune.Color("#1cbb90", 0.3);
            var color2 = new Rune.Color("#fff568", 0.4);
            var colorLine2 = new Rune.Color("#fff568", col);
            var xWord2 = 1300;
            haha++;
            // console.log(text);
            //green
          }
          else if(text.toLowerCase().indexOf("floor") > -1){
            var color2 = new Rune.Color("#fe9001", 0.4);
            var colorLine2 = new Rune.Color("#fe9001", col);
            var xWord2 = 1400;
            floor++;
            // console.log(text);
            //orange
          }
          else if(text.toLowerCase().indexOf("what are you doing") > -1 || text.toLowerCase().indexOf("whatcha doin") > -1){
            var color2 = new Rune.Color("#82ca9c", 0.2);
            var colorLine2 = new Rune.Color("#82ca9c", col);
            var xWord2 = 1500;
            doing++;
            // console.log(text);
            // console.log(name);
            // console.log(text);
            // console.log(time);
          }
          else{
            // var color2 = new Rune.Color("#5BC0DE", 0.2);
            var color2 = new Rune.Color("#6dcff6", 0.3);
            var colorLine2 = new Rune.Color("#6dcff6", col);
            var xWord2 = 0;
            //light blue
          }

          if(hours >= 0 && hours <= 11){
            radius2 = 240;
            randomPos = Rune.random(-90,90);
          }
          else if(hours >= 12 && hours <= 23){
            radius2 = 720;
            hours -= 12;
            randomPos = Rune.random(-110, 110); 
          }

          
          radius2 += randomPos;
          var size2 = 20 + textLength/10;
          // var size2 = 30;
          var x2 = r.width/2+Math.cos(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius2;
          var y2 = -400+r.height/2+Math.sin(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius2;

          // var tree2 = r.triangle(x2, y2 - size2, 
          //   x2 - Math.sqrt(2)/2*(size2), y2 + size2/2, 
          //   x2 + Math.sqrt(2)/2*(size2), y2 + size2/2)
          
          var tree2 = r.circle(x2, y2, size2)
          .fill(color2)
          .stroke(false);

          // var color3 = color2
          // var color4 = color3.darken(0.5);
          if(xWord2 !== 0){
            var path = r.path(x2, y2)
              .curveTo(xWord2-x2, 1900-y2, xWord2-x2, 3800-y2)
              .stroke(colorLine2)
              .fill(false);
          }
          // .rotate(Rune.random(0,360));
          // console.log(tree2);
          // console.log(y2 - size2);
          // console.log(y2 + size2/2);
        }
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
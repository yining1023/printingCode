var r = new Rune({
  container: "#canvas",
  width: 2400,
  height: 3600,
  // debug: true
});

// r.rect(0, 0, r.width, r.height).fill("#ffffff").stroke(false);
r.rect(0, 0, r.width, r.height).fill("#ffffff").stroke(false);

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
var points = 240;
var spacing = 360/points;

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

          console.log(hours);
        
        // console.log(hours);
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        // console.log(formattedTime);
        // console.log(seconds);
        // console.log(minutes);

        if(name == "Yining  Shi"){
          if(text.indexOf("I miss you") > -1 || text.indexOf("i miss you") > -1 || text.indexOf("i missed you") > -1 || text.indexOf("I missed you") > -1){
            var color = new Rune.Color("#ff0000", 0.2);
            //red color
            // console.log(name);
            // console.log(text);
            // console.log(time);
          }
          else if(text.indexOf("me too") > -1 || text.indexOf("Me too") > -1){
            var color = new Rune.Color("#af3aeb", 0.2);
            // console.log(text);
          }
          else if(text.indexOf("haha") > -1 || text.indexOf("Haha") > -1){
            var color = new Rune.Color("#62C462", 0.2);
            // console.log(text);
          }
          else if(text.indexOf("floor") > -1 || text.indexOf("Floor") > -1){
            var color = new Rune.Color("#fe9001", 0.2);
            // console.log(text);
          }
          else if(text.indexOf("data") > -1 || text.indexOf("Data") > -1){
            var color = new Rune.Color("#1F3A93", 0.2);
            // console.log(text);
            // console.log(name);
            // console.log(text);
            // console.log(time);
          }
          else{
            var color = new Rune.Color(244, 154, 193, 0.2);
            // console.log(text);
          }

          if(hours >= 0 && hours <= 11){
            radius = 480;
          }
          else if(hours >= 12 && hours <= 23){
            radius = 720;
            hours -= 12; 
          }

          randomPos = Rune.random(-70,70);
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
        }

        // else if(name == "Sagar Mohite"){
        //   if(text.indexOf("I miss you") > -1 || text.indexOf("i miss you") > -1 || text.indexOf("i missed you") > -1 || text.indexOf("I missed you") > -1){
        //     var color2 = new Rune.Color("#ff0000");
        //     //red color
        //     // console.log(name);
        //     // console.log(text);
        //     // console.log(time);
        //     // console.log(i);
        //     // console.log(j);
        //   }
        //   else if(text.indexOf("me too") > -1 || text.indexOf("Me too") > -1){
        //     var color2 = new Rune.Color("#af3aeb");
        //     //purple
        //     // console.log(text);
        //   }
        //   else if(text.indexOf("haha") > -1 || text.indexOf("Haha") > -1){
        //     var color2 = new Rune.Color("#62C462");
        //     // console.log(text);
        //     //green
        //   }
        //   else if(text.indexOf("floor") > -1 || text.indexOf("Floor") > -1){
        //     var color2 = new Rune.Color("#fe9001");
        //     // console.log(text);
        //     //orange
        //   }
        //   else if(text.indexOf("data") > -1 || text.indexOf("Data") > -1){
        //     var color2 = new Rune.Color("#1F3A93");
        //     // console.log(text);
        //     // console.log(name);
        //     // console.log(text);
        //     // console.log(time);
        //   }
        //   else{
        //     var color2 = new Rune.Color("#5BC0DE");
        //     //light blue
        //   }

        //   var x = Math.cos(Rune.radians(hours*10 * spacing)) * radius;
        //   var y = Math.sin(Rune.radians(hours*10 * spacing)) * radius;

        //   var tree2 = r.triangle(x, y - size/2, x - Math.sqrt(2)/2*(x), y + size*3/4, x + Math.sqrt(2)/2*(x), y + size*3/4)
        //   .fill(color2)
        //   .stroke(false);
        // }
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
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "The system is listening; you can speak!"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = " Sorry, I think you said, '" + content + "'"; 
      if(content =="circle" || content =="Circle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "We've started drawing the circle...! "; 
        draw_circle = "set";
      }
      if(content =="rectangle" || content =="Rectangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "We've started drawing the rectangle...! "; 
        draw_rect = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "You circle has been drawn! ";
    draw_circle = "";
  }

  if(draw_rect == "set")
  {
    radius = Math.floor(Math.random() * 100);
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "You rectangle has been drawn! ";
    draw_rect = "";
  }

}




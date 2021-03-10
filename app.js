var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

//water
context.beginPath();
context.rect(0, 300, 400, 300)
var lGradient = context.createLinearGradient(0, 0, 400, 0);
lGradient.addColorStop(0, "#0000FF");
lGradient.addColorStop(1, "#5F9AD1");
context.fillStyle=lGradient;
context.strokeStyle="blue";
context.fill();
context.stroke();


//triangles

//sail
context.beginPath();
context.moveTo(155, 150);
context.lineTo(220, 270);
context.lineTo(90, 270);
context.lineTo(155, 150);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();

//flag
context.beginPath();
context.moveTo(145, 110);
context.lineTo(145, 140);
context.lineTo(110, 125);
context.lineTo(145, 110);
context.closePath();
context.fillStyle="#15960A";
context.strokeStyle="#15960A";
context.fill();
context.stroke();


//bottom of boat
context.rect(70, 280, 170, 40);
context.fillStyle="brown";
context.strokeStyle="brown";
context.fill();
context.stroke();

//pole
context.rect(150, 100, 10, 180)
context.fillStyle="black";
context.strokeStyle="black";
context.fill();
context.stroke();

//circle/sun
context.beginPath();
context.arc(330, 70, 45, 0, 2*Math.PI, true);

var sGradient =context.createRadialGradient(330, 70, 10, 330, 70, 45);
sGradient.addColorStop(0, "#FF8C00");
sGradient.addColorStop(1, "#FFFF00");
context.fillStyle=sGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();


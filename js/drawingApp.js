
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //Variables
var radius = 10;
var dragging = false;

ctx.lineWidth = radius*2;

  //functions
    function putPoint(e){
      if(dragging){
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
      }
  }

var engage = function(e){
  dragging = true;
  putPoint(e);
}
var disengage = function(){
  dragging = false
  ctx.beginPath();
}


    canvas.addEventListener("mousedown", engage);
    canvas.addEventListener("mousemove", putPoint);
    canvas.addEventListener("mouseup", disengage);

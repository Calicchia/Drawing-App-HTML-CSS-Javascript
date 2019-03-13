var colors = [
    "#ABB2B9",
    "#E74C3C",
    "#9B59B6",
    "#2980B9",
    "#1ABC9C",
    "#F1C40F",
    "#D35400"
];


for(var i=0, n=colors.length;i<n;i++){
  var swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener("click", setSwatch);
  document.getElementById("colors").appendChild(swatch);
}

function setSwatch(e){
  // identity swatch
  var swatch = e.target;
  // set color
  setColor(swatch.style.backgroundColor);
  // give active class
  swatch.className +=" active";
}

function setColor(color){
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var active = document.getElementsByClassName("active")[0];
  if(active){
    active.className = "swatch"
  }
}

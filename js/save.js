var saveButton = document.getElementById("save");

saveButton.addEventListener("click", saveImage);

function saveImage(){
  var data = canvas.toDataURL();

  var request = new XMLHttpRequest();

  request.onreadystatechange = function(){ // 200 = everything oke
    if(request.readystate == 4 && request.status == 200){
      var response =request.responseText;
      console.log(response);
    }
  }

  request.open("POST","save.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("img="+data);


  // _black : URL is loaded into a new window. this is default
//  window.open(data, "_black", "location=0, menubar=0");
}

//Script to read an image taken from phone's camera
console.log("in js");
$('#myFileInput').change(function() {
     const file = document.getElementById('myFileInput').files[0]
     console.log(file);
     var img = document.createElement("img");
     img.classList.add("obj");
     img.file = file;
     img.id = "genimg"



     var reader = new FileReader();
     reader.onload = (function(aImg) { return function(e) { localStorage.image = e.target.result; }; })(img);
     reader.readAsDataURL(file);
});


//            var canvasDiv = document.getElementById('canvasDiv'); 
//   canvas = document.createElement('canvas'); 
 
//   canvas.setAttribute('id', 'canvas-1'); 
//   $(canvasDiv).prepend(canvas); 
//   if(typeof G_vmlCanvasManager != 'undefined') { 
//       canvas = G_vmlCanvasManager.initElement(canvas); 
//   } 
    
//   var context = canvas.getContext('2d'); 
//   var imageObj = new Image(); 
    
//   imageObj.onload = function() {
//       $(canvas).attr({width : screen.width, height: screen.height});
//       context.drawImage(imageObj,0,0, screen.width, screen.height - 50); 
//   }; 
//   imageObj.src = localStorage.image; 
    
//   var clickX = new Array(); 
//   var clickY = new Array(); 
//   var clickDrag = new Array(); 
//   var paint; 
    
//   function addClick(x, y, dragging) 
//   { 
//       clickX.push(x); 
//       clickY.push(y); 
//       clickDrag.push(dragging); 
//   } 
    
//   function redraw(){ 
//       //canvas.width = canvas.width; // Clears the canvas 
//       //context.drawImage(imageObj,0,0); 
    
//       context.strokeStyle = "#df4b26"; 
//       context.lineJoin = "round"; 
//       context.lineWidth = 5; 
                
//       for(var i=0; i < clickX.length; i++) 
//       { 
//         context.beginPath(); 
//         context.arc(clickX[i], clickY[i], 3, 0, 2 * Math.PI, false); 
//         context.fillStyle = '#ffffff'; 
//         context.fill(); 
//         context.lineWidth = 5; 
//         context.stroke(); 
//       } 
//   } 
    

// function touchHandler(event) {
//         //get a reference to our coordinates div
//         //var coords = document.getElementById("coords");
//         //write the coordinates of the touch to the div
//         //coords.innerHTML = 'x: ' + event.touches[0].pageX + 'y: ' + event.touches[0].pageY;
//         //coordStr += " " + event.touches[0].pageX + "," + event.touches[0].pageY; 
//         //console.log(coordStr);
//       addClick(event.touches[0].pageX, event.touches[0].pageY - 60); 
//       redraw(); 
//   } 
//   function init() {
//     console.log
//         var touchzone = document.getElementById("canvasDiv");
//         touchzone.addEventListener("touchstart", touchHandler, false);
//         touchzone.addEventListener("touchmove", touchHandler, false);
//         document.ontouchstart = function(e){ 
//           e.preventDefault(); 
//       }
//         console.log('Init');
//       }
    
//   $('#generate').click(function(){ 
//     var data = new Image(); 
//     data.src = localStorage.image;
//       $(".clipParent").empty(); 
//       $(".clipParent").prepend(data); 
//       var arr = []; 
//       for(var i=0; i < clickX.length; i++){ 
//           arr.push(clickX[i]); 
//           arr.push(clickY[i]); 
//       } 
//       // console.log(data);
//       $(data)[0].setAttribute("data-polyclip",arr.join(", ")); 
//       clickX=[]; 
//       clickY=[]; 
//       redraw(); 

//       polyClip.init(); 
//       localStorage["myKey"] = JSON.stringify($("#get-this").html());
//       console.log(localStorage["myKey"]);
//       window.location.href = "../image-cropped";
//   });
//  var contentsOfOldDiv = JSON.parse(localStorage["myKey"]);   
//     console.log(contentsOfOldDiv);
//     $("#cropped_image").html(contentsOfOldDiv);
//     var image = new Image();
//     image = document.getElementById('cropped_image');
//     console.log(document.getElementById('cropped_image'))
//     document.getElementById('new_image').src = image;
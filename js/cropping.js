// $('#myFileInput').change(function() {
//     const file = document.getElementById('myFileInput').files[0]

//     var img = document.createElement("img");
//     img.classList.add("obj");
//     img.file = file;
//     // preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
    
//     var reader = new FileReader();
//     reader.onload = (function(aImg) { return function(e) { localStorage.image = e.target.result; window.location.href = "crop-image"; }; })(img);
//     reader.readAsDataURL(file);

// $('#get-image').onload = function() {
//          document.getElementById("tableBanner").src = localStorage.image;
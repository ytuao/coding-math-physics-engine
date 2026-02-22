window.onload = function() {
    // Initialize canvas
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth, 
        height = canvas.height = window.innerHeight;

    // Fill the full window black
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    // Set line colour to white
    context.strokeStyle = "white";

    // Set the line width
    context.lineWidth = 2;

    // Draw 100 random lines 
    for(var i = 0; i < 100; i += 1){
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke()
    }
}

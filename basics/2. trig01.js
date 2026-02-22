window.onload = function() {
    // Get canvas element and set up drawing context with full window dimensions
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth, 
        height = canvas.height = window.innerHeight;

    // Move origin to left edge, vertical center (y = height/2)
    context.translate(0, height / 2);
    // Flip y-axis so positive is up (mathematical coordinate system)
    context.scale(1, -1);

    // Loop through angles from 0 to 2π (full circle) in increments of 0.01 radians
    for (var angle = 0; angle < Math.PI * 2; angle += .01) {

        // Output sine value to console for debugging
        console.log(Math.sin(angle));

        // Calculate x position (angle * 200) and y position (sine * 200)
        var x = angle * 200,
        y = Math.sin(angle) * 200;

        // Draw a 5x5 pixel square at each calculated point
        context.fillRect(x, y, 5, 5);
    }
}

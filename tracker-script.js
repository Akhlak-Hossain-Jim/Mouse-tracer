const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLEi = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    var horizontalPositioni = windowWidth - e.clientY - 50;
    var verticalPositioni= windowHeight - e.clientX - 50;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLEi.style.left = horizontalPositioni-2 + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    CIRCLEi.style.top = -verticalPositioni+10 + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "rgb(233, 201, 18)";
    //CIRCLE.style.borderColor = "rgb(233, 201, 18)";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
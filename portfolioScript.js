// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

/* Landing Page Background */
function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
}

// Vectors
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function getAngle(from, to) {
    return Math.atan2(from.y - to.y, from.x - to.x);
}

function getDirectionVector(angle) {
    return {
        x: Math.cos(angle),
        y: Math.sin(angle)
    };
}

function getVectorTowards(from, to) {
    var angle = getAngle(from, to);
    return getDirectionVector(angle - Math.PI);
}

// Particle
class Particle {
    constructor(
        context,
        x, y,
        color = '#000',
        diameter = Math.random() * 2 + 0.5,
        direction = Math.random() * Math.PI,
        damping = 0.85,
        steeringRandomness = 0.25,
        steeringForce = 0.1,
        boundaryForce = 0.2,
        movementRadius = Math.random() * 50 + 10)
    {   this.position = {
            current: {x, y},
            home: {x, y}
        };
        this.velocity = { x: 0, y: 0 };
        this.direction = direction;
        this.settings = { boundaryForce, color, context, diameter, damping, movementRadius, steeringForce, steeringRandomness };
    }
    move() {
        const { steeringForce, movementRadius, boundaryForce, damping } = this.settings;
        var { current, home } = this.position;
        var { velocity } = this;
        // Add velocity in the current direction.
        var steeringVector = getDirectionVector(this.direction);
        velocity.x += steeringVector.x * steeringForce;
        velocity.y += steeringVector.y * steeringForce;
        // Randomly steer the direction around
        this.setDirection();
        // Get distance from home coordinates
        var dist = distance(current.x, current.y, home.x, home.y);
        // Apply a force shoving each particle back toward the "home" position modulated by the distance from that home point compared to the `movementRadius` threshold.
        if (dist > 0) {
            var steerToHome = getVectorTowards(current, home);
            dist = Math.min(movementRadius, dist);
            dist = (dist / movementRadius);
            velocity.x += steerToHome.x * dist * boundaryForce;
            velocity.y += steerToHome.y * dist * boundaryForce;
        }
        velocity.x *= damping;
        velocity.y *= damping;
        current.x += velocity.x;
        current.y += velocity.y;
    }
    draw() {
        const {diameter, context, color} = this.settings;
        var {current} = this.position;
        var radius = diameter / 2;
        context.fillStyle = color;
        context.beginPath();
        context.arc(current.x, current.y, radius, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
    }
    setDirection() {
        const { steeringRandomness } = this.settings;
        this.direction += (Math.random() * 2 - 1) * steeringRandomness;
    }
}

// Canvas
class Canvas {
    constructor(element, particleSpacing = 50, lineWidth = 1, pointerRadius = 100, lineRadius = 100, fps = 1000 / 100) {
        this.canvas = element;
        this.context = element.getContext('2d');
        this.particleSpacing = particleSpacing;
        this.fps = fps;
        this.pointerRadius = pointerRadius;
        this.lineRadius = lineRadius;
        this.lineWidth = lineWidth;
        this.init();
    }
    init() {
        this.stop();
        this.clear();
        this.resize();
        this.createParticles();
        this.animate();
        this.bind();
    }
    bind() {
        const { canvas } = this;
        window.addEventListener('resize', () => this.init());
        canvas.addEventListener('mousemove', event => {
            event.preventDefault();
            this.setPointer(event.clientX, event.clientY);
        });
        canvas.addEventListener('touchstart', event => {
            event.preventDefault();
            this.setPointer(event.touches[0].clientX, event.touches[0].clientY);
        });
        canvas.addEventListener('touchmove', event => {
            event.preventDefault();
            this.setPointer(event.touches[0].clientX, event.touches[0].clientY);
        });
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    setPointer(x, y) {
        this.pointer = { x, y };
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    createParticles() {
        const { width, height } = this.canvas;
        const { particleSpacing } = this;
        var cols = Math.floor(width / particleSpacing),
            rows = Math.floor(height / particleSpacing),
            colGutter = (particleSpacing + (width - cols * particleSpacing)) / 2,
            rowGutter = (particleSpacing + (height - rows * particleSpacing)) / 2;
        this.particles = [];
        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                let x = col * particleSpacing + colGutter + particleSpacing * Math.random() * plusOrMinus(),
                    y = row * particleSpacing + rowGutter + particleSpacing * Math.random() * plusOrMinus(),
                    r = Math.round(48 + x / width * 25 + y / height * 25),
                    color = 'rgba(' + r + ', 0, 103, 1)',
                    particle = new Particle(this.context, x, y, color);
                this.particles.push(particle);
            }
        }
    }
    drawLines() {
        if (this.pointer) {
            const { particles, context, pointer, pointerRadius, lineRadius, lineWidth } = this;
            let nearParticles = [];
            particles.forEach(function (particle) {
                var dist = distance(particle.position.current.x, particle.position.current.y, pointer.x, pointer.y)
                if (dist < pointerRadius) {
                    nearParticles.push({
                        particle,
                        dist
                    });
                }
            });
        }
    }
    draw() {
        this.clear();
        if (this.particles) {
            for (let i = 0; i < this.particles.length; i++) {
                let particle = this.particles[i];
                particle.move();
                particle.draw();
            }
            this.drawLines();
        }
    }
    animate() {
        var now = Date.now();
        if (this.lastFrameDate === undefined || (now - this.lastFrameDate > this.fps)) {
            this.lastFrameDate = now;
            this.draw();
        }
        this.animationFrame = window.requestAnimationFrame(() => this.animate());
    }
    stop() {
        window.cancelAnimationFrame(this.animationFrame);
    }
}

// Init
new Canvas(document.getElementById('canvas'));
/* END of Landing Page Background */

$(document).ready(function(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        $landing = $("header"),
        $navBar = $(".navbar.navbar-inverse"),
        $navbarA = $(".navbar a, header a"),
        $contactSection = $("#contactSection"),
        contactHeight = $contactSection.height(),
        footerHeight = $("footer").height();

    //alert(windowHeight);

    //Landing Page Size
    $landing.css("height",(windowHeight - 49));
    $navBar.attr("data-offset-top",(windowHeight - 52));

    //Contact Section Height
    if ( 52 + footerHeight + contactHeight < windowHeight) {
        $contactSection.css("height",(windowHeight - 49 - footerHeight));
    }

    //Page on Resize
    $(window).on("resize", function() {
        var windowHeight = $(window).height(),
            contactHeight = $contactSection.height(),
            footerHeight = $("footer").height();
        //Landing Page Size
        $landing.css("height", (windowHeight - 49));
        $navBar.attr("data-offset-top", (windowHeight - 52));
        //Contact Section Height
        if ( 52 + footerHeight + contactHeight < windowHeight) {
            $contactSection.css("height",(windowHeight - 49 - footerHeight));
        }
    });

    // Smooth scrolling to all links in navbar and arrow
    $navbarA.on('click', function(event) {
        event.preventDefault();
        // Smooth Page Scroll
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
        }); // end animate callback
    }); // end onclick

    // Entrance Animation Scroll
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top,
                winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        }); // end each
    }); // end scroll

    // initialize WOW for animation
    new WOW().init();

    $('#contactForm').validate({

        rules: {
            email: {
                required: true,
                email: true
            }
        }, //end rules
        messages: {
            email: {
                required: "Your email address is required",
                email: "This is not a valid email address"
            }
        }
    }); // end validate
}); // end ready

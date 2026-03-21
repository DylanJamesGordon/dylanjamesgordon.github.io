// All Javascript is in a script - The behavior
// The CSS and HTML was fairly self explanatory, however Javascript was where I began to get lost
// I had a concept I had no idea how to implement, so I used AI to help guide me in the direction and then explain how the math and logic works.

// Mouse Interaction
// Creates mouse variable, defines properties, run function when mouse moves, check x and y location
// Simpler, smaller JS
let mouse = {
    x: null,
    y: null
};

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});



// Pixel Waterfall
const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pixels = [];

const pixelCount = 120;

for (let i = 0; i < pixelCount; i++) {
    pixels.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1 + 0.5,
        size: 2
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixels.forEach(p => {

    const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
            p.x += dx * 0.05;
            p.y += dy * 0.05;
        }

        p.y += p.speed;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = "#4cc9f0";
        ctx.fillRect(p.x, p.y, p.size, p.size);

    });

    requestAnimationFrame(animate);
}

animate();
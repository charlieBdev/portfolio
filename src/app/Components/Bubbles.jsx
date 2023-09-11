import React, { useRef, useEffect } from "react";

const Bubbles = () => {
	const canvasRef = useRef(null);
	const particleArray = [];

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const Particle = class {
			constructor(x = 0, y = 0) {
				this.x = x;
				this.y = y;
				this.radius = Math.random() * 50;
				this.dx = Math.random() * 3;
				this.dy = Math.random() * 7;
				this.color = ""; // Initialize as an empty string
			}

			setColorBasedOnBackground() {
				const canvasBackgroundColor =
					window.getComputedStyle(canvas).backgroundColor;
				const brightness = calculateBrightness(canvasBackgroundColor);
				const threshold = 128; // Adjust as needed

				if (brightness < threshold) {
					this.color = "white";
				} else {
					this.color = "black";
				}
			}

			draw() {
				const gradient = context.createRadialGradient(
					this.x,
					this.y,
					1,
					this.x + 0.5,
					this.y + 0.5,
					this.radius
				);
				gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
				gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");
				context.fillStyle = gradient;
				context.shadowBlur = 10;
				context.shadowColor = "rgba(255, 255, 255, 0.5)";

				context.beginPath();
				context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
				context.lineWidth = 0.2;
				context.strokeStyle = this.color;
				context.stroke();
				context.fill();
			}

			move() {
				this.x = this.x + this.dx;
				this.y = this.y - this.dy;
			}
		};

		const handleDrawCircle = (event) => {
			const x = event.pageX;
			const y = event.pageY;

			for (let i = 0; i < 50; i++) {
				const particle = new Particle(x, y);
				particleArray.push(particle);
			}
		};

		const animate = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			particleArray.forEach((particle) => {
				particle?.move();
				particle?.draw();
			});

			requestAnimationFrame(animate);
		};

		animate();

		canvas.addEventListener("click", handleDrawCircle);

		// Function to calculate brightness based on RGB values
		const calculateBrightness = (color) => {
			const rgb = color.match(/\d+/g).map(Number);
			return (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1000;
		};

		// Function to set the bubble color based on the background
		const updateBubbleColor = () => {
			for (const particle of particleArray) {
				particle.setColorBasedOnBackground();
			}
		};

		// Listen for changes to the dark mode class
		const darkModeObserver = new MutationObserver(updateBubbleColor);
		darkModeObserver.observe(document.body, {
			attributes: true,
			attributeFilter: ["class"],
		});

		// Initial call to set the bubble color
		updateBubbleColor();
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{ background: "inherit", position: "absolute", top: 0, left: 0 }}
		></canvas>
	);
};

export default Bubbles;

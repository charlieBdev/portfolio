import React, { useRef, useEffect } from "react";

const Bubbles = () => {
  const canvasRef = useRef(null);
  const particleArray = [];
  const particlesToRemove = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
			constructor(x = 0, y = 0) {
				this.x = x;
				this.y = y;
				this.radius = Math.random() * 50;
				this.dx = (Math.random() - 0.5) * 3; // Random horizontal velocity between -1.5 and 1.5
				this.dy = Math.random() * 3; // Random vertical velocity upwards
				this.colors = [
					"244, 114, 182",
					"216, 180, 254",
					"34, 211, 238",
					"52, 211, 153",
					"253, 224, 71",
					// "34, 197, 94"
				];
				this.color = this.getRandomColor();
				this.creationTime = Date.now();
			}
		
			getRandomColor() {
				const randomIndex = Math.floor(Math.random() * this.colors.length);
				return this.colors[randomIndex];
			}
		
			move() {
				this.x += this.dx;
				this.y -= this.dy;
		
				// Check if the particle is completely off the screen
				if (
					this.x + this.radius < 0 ||
					this.x - this.radius > canvas.width ||
					this.y + this.radius < 0 ||
					this.y - this.radius > canvas.height
				) {
					// Add the particle to the removal array
					particlesToRemove.push(this);
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
			
				// Set gradient colors based on the random color
				gradient.addColorStop(0, `rgba(${this.color}, 0.9)`);
				gradient.addColorStop(0.5, `rgba(${this.color}, 0.7)`);
				gradient.addColorStop(1, `rgba(${this.color}, 0.01)`);
			
				context.fillStyle = gradient;
				context.shadowBlur = 1;
				// context.shadowColor = `rgba(${this.color}, 1)`;
			
				context.beginPath();
				context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			
				// Remove the outline color setting
				// context.strokeStyle = "black"; // or context.strokeStyle = "white";
			
				context.lineWidth = 1;
				// context.stroke(); // Remove this line to remove the outline
				context.fill();
			}
			
    }

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

    // Function to set the bubble color based on the background
    const updateBubbleColor = () => {
      for (const particle of particleArray) {
        particle.color = particle.getRandomColor();
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

    // Remove particles that are off-screen
    const removeOffScreenParticles = () => {
      particlesToRemove.forEach((particle) => {
        const index = particleArray.indexOf(particle);
        if (index > -1) {
          particleArray.splice(index, 1);
        }
      });
      particlesToRemove.length = 0; // Clear the removal array
    };

    setInterval(removeOffScreenParticles, 6000); // Remove off-screen particles every 6 seconds
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ background: "inherit", position: "absolute", top: 0, left: 0 }}
    ></canvas>
  );
};

export default Bubbles;

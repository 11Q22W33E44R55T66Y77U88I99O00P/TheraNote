
import React, { useRef, useEffect } from 'react';

const AnimatedNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Settings for a subtle, professional look
        const numPoints = 80; // Changed from 60 to 80
        const connectDistance = 160;
        const pointSpeed = 0.5; // Increased from 0.3 for more speed
        const pointRadius = 3; // Changed from 2.5 to 3

        let points = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight; // Cover the whole page height
            createPoints();
        };

        const createPoints = () => {
            points = [];
            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * pointSpeed,
                    vy: (Math.random() - 0.5) * pointSpeed,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw points
            points.forEach(point => {
                point.x += point.vx;
                point.y += point.vy;

                if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

                ctx.beginPath();
                ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(110, 231, 183, 0.5)'; // Changed from 0.4 to 0.5
                ctx.fill();
            });

            // Draw lines connecting nearby points
            for (let i = 0; i < numPoints; i++) {
                for (let j = i + 1; j < numPoints; j++) {
                    const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);

                    if (dist < connectDistance) {
                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        // Make line opacity fade with distance
                        ctx.strokeStyle = `rgba(110, 231, 183, ${0.8 * (1 - dist / connectDistance)})`; // Changed from 0.7 to 0.8
                        ctx.lineWidth = 1; // Changed from 0.7 to 1
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Debounce resize handler for performance
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 100);
        };

        window.addEventListener('resize', handleResize);
        // Initial setup
        resizeCanvas();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                pointerEvents: 'none',
                opacity: 0.9, // Increased from 0.8 for more visibility
            }}
            aria-hidden="true"
        />
    );
};

export default AnimatedNetwork;

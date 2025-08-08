document.addEventListener("DOMContentLoaded", () => {
            const track = document.getElementById("slider-track");
            
            if (track) {
                const slides = Array.from(track.children);
                
                slides.forEach(slide => {
                    const clone = slide.cloneNode(true);
                    track.appendChild(clone);
                });

                const slideWidth = slides[0].getBoundingClientRect().width;
                const totalWidth = slideWidth * slides.length;
                
                const animation = gsap.to(track, {
                    x: -totalWidth,
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                });
                
                const sliderContainer = document.getElementById("slider-container");
                sliderContainer.addEventListener("mouseenter", () => animation.pause());
                sliderContainer.addEventListener("mouseleave", () => animation.resume());
            }
        });
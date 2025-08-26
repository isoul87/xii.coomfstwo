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


        // 1. Tentukan tanggal tujuan countdown
        const countdownDate = new Date("April 19, 2026 00:00:00").getTime();

        // 2. Perbarui countdown setiap 1 detik
        const interval = setInterval(() => {
            // Dapatkan tanggal dan waktu saat ini
            const now = new Date().getTime();
            
            // Hitung selisih antara sekarang dan tanggal tujuan
            const distance = countdownDate - now;
            
            // 3. Kalkulasi waktu untuk hari, jam, menit, dan detik
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // 4. Tampilkan hasilnya di elemen HTML
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
            
            // 5. Jika countdown selesai
            if (distance < 0) {
                clearInterval(interval); // Hentikan interval
                document.getElementById("countdown").classList.add("hidden"); // Sembunyikan timer
                document.getElementById("message").classList.remove("hidden"); // Tampilkan pesan
            }
        }, 1000); // 1000 milidetik = 1 detik

    
// STICKY POSITION
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".panel")

panels.forEach((panel, i) => {
    // Lewati panel terakhir karena tidak perlu di pin
    if (i < panels.length - 1) {
        ScrollTrigger.create({
            trigger: panel, // Pemicunya adalah panel itu sendiri
            start: "top top", // mulai saat bagian panel menyentuh layar
            pin: true,  // kunci panel di tempatnya
            pinSpacing: false
        })
    }
})
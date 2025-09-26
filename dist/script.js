// Loader jalan
window.addEventListener('load', function() {
        const loaderElement = document.getElementById('loader');
        const mainContentElement = document.getElementById('main-content');
        setTimeout(() => {
          if (loaderElement) loaderElement.classList.add('hidden');
                if (mainContentElement) {
                    mainContentElement.classList.remove('invisible');           
                }
      gsap.from("#main-content", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
    });
      gsap.to("#header", {
        opacity: 1,
        duration: 1.2,
        delay: 2,
        ease: "power3.out",
    });
        }, 2000)
  });
    
  // function setupNavbarFixed() {
  //     console.log("FUNGSI SETUPNAVBARFIXED BERJALAN!"); 
  //     const header = document.querySelector('#header');
  //     const toTop = document.querySelector('#toTop');
      
  //     if (!header) return;
  
  //     // Hitung posisi header SETELAH semua konten terlihat
  //     const fixedNav = header.offsetTop;
  
  //     function checkNav() {
  //       console.log("Posisi scroll (pageYOffset):", window.pageYOffset);
  //         if (window.pageYOffset > fixedNav) {
  //             header.classList.add('navbar-fixed');
  //             if (toTop) {
  //                 toTop.classList.remove('hidden');
  //                 toTop.classList.add('flex');
  //             }
  //         } else {
  //             header.classList.remove('navbar-fixed');
  //             if (toTop) {
  //                 toTop.classList.remove('flex');
  //                 toTop.classList.add('hidden');
  //             }
  //         }
  //     }
  
  //     window.addEventListener("scroll", checkNav);
  //     checkNav(); // Cek sekali saat pertama kali
  // };
// Cache pada browser
  self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("coomfstwo-cache").then((cache) => {
      return cache.addAll([
        "/",              // halaman utama
        "/index.html",    // file html
        "/src/input.css",     // css
        "/dist/script.js",     // js
        "/src/img" // gambar
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("dist/script.js")
}

// Saat browser ready jalankan fungsi ini
document.addEventListener("DOMContentLoaded", function() {
  AOS.init();


// Hambuger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navmenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});


// Klik selain hambuger 

window.addEventListener('click', (e) => {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden')  
    }
});


// Dark mode toggle 

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

// Pindahkan posisi toggle sesuai mode 

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
};


});


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
});


// Tunggu sampai semua HTML siap 
document.addEventListener("DOMContentLoaded", () => {
  const swipe = document.querySelector("#press-slide-track");
  const swipes = gsap.utils.toArray(".press-slide-show"); // Cara gsap memilih elemen
  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");

  const numSwipes = swipes.length; // Hitung Jumlah slide

  let currentIndex = 0; // Melacak slide yang aktif

  // Atur lebar track 
  gsap.set(swipe, { width:100 + "%"});

  // INI FUNGSI UTAMA KITA 
  // Fungsi untuk pindah ke slide tertentu 
  function goToSlide(index) {
    // Pastikan index tidak kurang dari 0 atau lebih dari jumlah slide 
    if (index < 0) index = 0;
    if (index >= numSwipes - 1) index = numSwipes - 1;

    currentIndex = index; 

    // Perintah gsap untuk menganimasikan swipe track
    gsap.to(swipe, {
      xPercent: -100 * currentIndex, // Geser ke kiri sejauh (100 * index slide)
      duration: 0.8,  
      ease: "power3.inOut" // Efek animasi yg halus

    });

    // Atur tombol 
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === numSwipes -1);

  }

  // Tambahkan fungsi pada tombol 
  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1); // pindah ke slide berikutnya
  });
  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1); // Pindah ke slide sebelumnya
  });

  // Atur posisi awal 
  goToSlide(0);

});

const btnFilter = document.querySelectorAll(".btn-list ul li");
const cardItem  = document.querySelectorAll(".project-card");

btnFilter.forEach(data => {
    data.onclick = () => {
        btnFilter.forEach(data => {
         data.classList.remove("active");   
        });
         data.classList.toggle("active");

        // filter images
        const btnText = data.textContent;
        cardItem.forEach(div => {
            div.style.display = "none";
            
            if(div.getAttribute("data-filter") == btnText || btnText == "All"){
                div.style.display ="block";
            }
        })
    };
});



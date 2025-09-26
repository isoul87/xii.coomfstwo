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
        "/cerkak.html",    // file html
        "/src/input.css",     // css
        "/dist/cerkak.js",     // js
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
})

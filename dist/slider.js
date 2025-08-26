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

})

/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Daftar teks yang akan berubah-ubah
const daftarTeks = [
    'Assalamu alaikum',
    'Selamat Datang',
    'Welcome Friends',
    '아살라무라이쿰'
  ];
  
  let indexTeks = 0;
  let indexHuruf = 0;
  
  function mengetik() {
    if (indexHuruf < daftarTeks[indexTeks].length) {
      document.getElementById("teks-mengetik").innerHTML += daftarTeks[indexTeks].charAt(indexHuruf);
      indexHuruf++;
      setTimeout(mengetik, 100); // Ubah angka ini untuk mengatur kecepatan pengetikan (dalam milidetik)
    } else {
      setTimeout(hapusTeks, 1000); // Waktu delay sebelum menghapus teks
    }
  }
  
  function hapusTeks() {
    if (indexHuruf >= 0) {
      const teks = daftarTeks[indexTeks].substring(0, indexHuruf);
      document.getElementById("teks-mengetik").innerHTML = teks;
      indexHuruf--;
      setTimeout(hapusTeks, 100); // Ubah angka ini untuk mengatur kecepatan penghapusan teks (dalam milidetik)
    } else {
      indexTeks = (indexTeks + 1) % daftarTeks.length;
      setTimeout(mengetik, 500); // Waktu delay sebelum mengetik teks baru
    }
  }
  
  // Panggil fungsi mengetik saat halaman dimuat
  window.onload = mengetik;
  
  

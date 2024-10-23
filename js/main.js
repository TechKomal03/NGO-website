
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // or 'vertical'
      loop: true,
      centeredSlides: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Autoplay
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      // Use slide or fade transition effect
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  });


  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    freeMode: true,
    autoplay: {
      delay: 2500, // 2500 milliseconds (2.5 seconds) between slides
      disableOnInteraction: false, // Continues auto-sliding even after user interaction
    },
  });
  function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src; // Set the clicked image as the modal image
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }


  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("donateButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // function showPop() {
  //   let pbox = document.getElementById('popbox'); // Store the element itself
  //   if (pbox.style.display === "none") {
  //     pbox.style.display = "block"; // Use '=' to assign the display property
  //   } else {
  //     pbox.style.display = "none"; // Use '=' to assign the display property
  //   }
  // }
  function showPop() {
    let pbox = document.getElementById('popbox');
    if(pbox.style.visibility === "hidden",
      pbox.style.opacity === "0"
    ){
      pbox.style.visibility = "visible";
      pbox.style.opacity = "1" ;
    }
    else{
    pbox.style.visibility = "hidden",
      pbox.style.opacity = "0"
    }
  }
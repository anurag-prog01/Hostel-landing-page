document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality
  let slider = document.querySelector(".slider .list");
  let items = document.querySelectorAll(".slider .list .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let dots = document.querySelectorAll(".slider .dots li");
  let lengthItems = items.length - 1;
  let active = 0;
  let refreshInterval;

  function nextSlide() {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
  }

  function prevSlide() {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
  }

  function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + "px";
      let lastActiveDot = document.querySelector(".slider .dots li.active");
      lastActiveDot.classList.remove("active");
      dots[active].classList.add("active");
      clearInterval(refreshInterval);
      refreshInterval = setInterval(nextSlide, 5000);
  }

  next.onclick = nextSlide;
  prev.onclick = prevSlide;

  dots.forEach((li, key) => {
      li.addEventListener("click", () => {
          active = key;
          reloadSlider();
      });
  });

  refreshInterval = setInterval(nextSlide, 5000);

  window.onresize = reloadSlider;

  // Navbar functionality
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navLinks = document.getElementById("navLinks");

  function openNavbar() {
      navLinks.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
  }

  function closeNavbar() {
      navLinks.classList.remove("active");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
  }

  menuIcon.addEventListener("click", openNavbar);
  closeIcon.addEventListener("click", closeNavbar);

  // Amenity items hover effect
  const amenityItems = document.querySelectorAll(".amenity-item");
  amenityItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
          item.style.backgroundColor = "#007bff";
          item.style.color = "#fff";
      });
      item.addEventListener("mouseleave", () => {
          item.style.backgroundColor = "#fff";
          item.style.color = "#333";
      });
  });

  // Gallery lightbox
  const galleryItems = document.querySelectorAll(".gallery-item img");
  galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
          const lightbox = document.createElement("div");
          lightbox.id = "lightbox";
          document.body.appendChild(lightbox);

          const img = document.createElement("img");
          img.src = this.src;

          lightbox.innerHTML = '';
          lightbox.appendChild(img);

          lightbox.style.display = "flex";
          lightbox.addEventListener("click", (e) => {
              if (e.target !== e.currentTarget) return;
              lightbox.style.display = "none";
          });
      });
  });

  // Rooms scrolling
  const rooms = document.querySelector('.rooms');
  const roomElements = document.querySelectorAll('.room');
  let currentIndex = 0;

  function cloneRooms() {
      roomElements.forEach(room => {
          const clone = room.cloneNode(true);
          rooms.appendChild(clone);
      });
  }

  function scrollRooms() {
      currentIndex++;
      const roomWidth = roomElements[0].offsetWidth + 20; // 20px for margin-right
      rooms.style.transform = `translateX(-${currentIndex * roomWidth}px)`;

      if (currentIndex >= roomElements.length) {
          setTimeout(() => {
              rooms.style.transition = 'none';
              currentIndex = 0;
              rooms.style.transform = 'translateX(0)';
              setTimeout(() => {
                  rooms.style.transition = 'transform 0.5s ease';
              }, 50);
          }, 500);
      }
  }

  cloneRooms();
  setInterval(scrollRooms, 3000);
});



document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  function showSlides() {
      slides.forEach((slide, index) => {
          slide.style.display = "none";
          dots[index].classList.remove("active");
      });

      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }

  // Add event listeners to dots
  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          slides.forEach((slide, i) => {
              slide.style.display = "none";
              dots[i].classList.remove("active");
          });
          slideIndex = index + 1;
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].classList.add("active");
      });
  });

  // Show the first slide
  showSlides();
});



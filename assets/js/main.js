/**
 * Template Name: eStartup
 * Template URL: https://bootstrapmade.com/estartup-bootstrap-landing-page-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });
})();

// Show some Drawing

document.addEventListener("DOMContentLoaded", () => {
  const drawingForm = document.querySelector(".drawing-form");
  const length = document.querySelector("#drawingInputLength");
  const width = document.querySelector("#drawingInputwidth");
  const drawingErr = document.querySelector("#drawingErr");
  const drawingErr1 = document.querySelector("#drawingErr1");
  const btn = document.querySelector(".more-drawing-btn");
  const drawingImg = document.querySelector(".drawing-img");
  const drawingImgh3 = document.querySelector(".drawing-img h3");

  drawingForm.addEventListener("submit", (e) => {
    function drawingTime() {
      btn.disabled.true;
      setTimeout(() => {
        btn.disabled = false;
        drawingErr.innerHTML = "";
      }, 2000);
    }
    e.preventDefault();
    if (length.value.trim() === "") {
      drawingErr.innerHTML = "<p style='color:red;'>Please enter length!</p>";
      drawingTime();
      return false;
    }
    if (width.value.trim() === "") {
      drawingErr1.innerHTML = "<p style='color:red;'>Please enter width!</p>";
      drawingTime();
      return false;
    }
    if (
      length.value >= 20 &&
      length.value <= 30 &&
      width.value >= 30 &&
      width.value <= 40
    ) {
      drawingImg.innerHTML = `
      <img src="./assets/img/drawing1.png" alt="" class="img-fluid" width="300px">
      <img src="./assets/img/drawing1.png" alt="" class="img-fluid" width="300px">
      `;
    } else {
      console.log("hello");
    }
  });
});

// send msg on email

const contactName = document.querySelector(".contact-name");
const contactEmail = document.querySelector(".contact-email");
const contactSubject = document.querySelector(".contact-subject");
const contactMsg = document.querySelector(".contact-msg");
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let params = {
    name: contactName.value,
    email: contactEmail.value,
    message: contactMsg.value,
  };

  emailjs
    .send("service_q4qhptf", "template_4tf1tt4", params)
    .then(function () {
      alert("Your message sent successfully 😊");
      contactForm.reset()
    })
    .catch(function (error) {
      console.log(error);
      alert("Failed to send email");
    });
});

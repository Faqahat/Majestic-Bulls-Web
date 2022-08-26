let navBtn = document.querySelector(".nav-btn");
let navbar = document.querySelector(".navbar");
navBtn.addEventListener("click", () => {
  navbar.classList.toggle("navbar-active");
  navBtn.classList.toggle("group");
});

const navTextLinks = document.querySelectorAll(".text-link");
navTextLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("navbar-active");
    navBtn.classList.remove("group");
  });
});

/**
 * Sticky Header on Scroll
 */
const selectHeader = document.querySelector("#navbar");
if (selectHeader) {
  let headerOffset = selectHeader.offsetTop;
  let nextElement = selectHeader.nextElementSibling;

  const headerFixed = () => {
    if (headerOffset - window.scrollY <= 0) {
      selectHeader.classList.add("is-fixed");
      if (nextElement) nextElement.classList.add("sticked-header-offset");
    } else {
      selectHeader.classList.remove("sticked");
      if (nextElement) nextElement.classList.remove("sticked-header-offset");
    }
  };
  window.addEventListener("load", headerFixed);
  document.addEventListener("scroll", headerFixed);
}

/**
 * Navbar links active state on scroll
 */
let navbarlinks = document.querySelectorAll("#navbar ul a");

function navbarlinksActive() {
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);

//  [popup]
const body = document.querySelector("body");
const popupClose = document.querySelector(".popup-close");
const popupTriggers = document.querySelectorAll(".open-popup");
popupTriggers.forEach((trig) => {
  trig.addEventListener("click", (event) => {
    event.preventDefault();
    const targetPopup = document.querySelector(trig.getAttribute("href"));
    targetPopup.classList.add("show-popup");
    body.classList.add("h-screen");
    body.classList.add("overflow-hidden");
  });
});

popupClose.addEventListener("click", () => {
  document.querySelector(".popup-box").classList.remove("show-popup");
  body.classList.remove("h-screen");
  body.classList.remove("overflow-hidden");
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("show-popup")) {
    document.querySelector(".popup-box").classList.remove("show-popup");
    body.classList.remove("h-screen");
    body.classList.remove("overflow-hidden");
  } else {
    return;
  }
});

const videoBtns = document.querySelectorAll(".video-playbtn");
videoBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
    btn.closest(".video-wrapper").querySelector("video").play();
  });
});

var slider = tns({
  container: ".nft-slider",
  items: 1.5,
  gutter: 20,
  speed: 1000,
  loop: false,
  nav: false,
  prevButton: ".nft-back",
  nextButton: ".nft-next",
  responsive: {
    1000: {
      gutter: 50,
    },
  },
});

// [CONTROL HEADER VIDEO]
const videoItem = document.querySelector(".video-header");
const videoPlayPause = document.querySelector(".btn-play");
const videoVoice = document.querySelector(".btn-voice");

videoPlayPause.addEventListener("click", () => {
  if (videoItem.paused) {
    videoItem.play();
    videoPlayPause.classList.add("group");
  } else {
    videoItem.pause();
    videoPlayPause.classList.remove("group");
  }
});

videoVoice.addEventListener("click", () => {
  if (videoItem.muted) {
    videoItem.muted = false;
    videoVoice.classList.remove("group");
  } else {
    videoVoice.classList.add("group");
    videoItem.muted = true;
  }
});

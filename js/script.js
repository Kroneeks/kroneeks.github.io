"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const burgerIconOpen = document.getElementById("burger-menu__open");
  const burgerIconClose = document.getElementById("burger-menu__close");

  const mobileMenu = document.getElementById("mobile-menu");
  const headerLangBtn = document.getElementById("header-lang-btn");
  const languageVariants = document.querySelectorAll(
    ".header__lang-variants i"
  );
  let languageActiveIdx = 0;

  burgerMenuBtn.addEventListener("click", (evt) => {
    burgerIconOpen.classList.toggle("hidden");
    burgerIconClose.classList.toggle("hidden");

    mobileMenu.classList.toggle("hidden");
  });

  headerLangBtn.addEventListener("click", (evt) => {
    switchLanguage();
  });

  function switchLanguage() {
    languageVariants[languageActiveIdx].classList.remove("active");
    languageActiveIdx += 1;
    if (languageActiveIdx >= languageVariants.length) {
      languageActiveIdx = 0;
      languageVariants[languageActiveIdx].classList.add("active");
    } else {
      languageVariants[languageActiveIdx].classList.add("active");
    }
  }
});

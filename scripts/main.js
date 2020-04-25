// by avavion.

// Анимация FadeOut
const fadeOut = (animationSelector, interval) => {
  const animationElement = document.querySelectorAll(animationSelector);

  animationElement.forEach((item) => {
    item.style.opacity = 1;
    let animationInterval = setInterval(() => {
      item.style.opacity = item.style.opacity - 0.05;
      if (item.style.opacity < 0.05) {
        clearInterval(animationInterval);
        item.style.display = "none";
      }
    }, interval);
  });
};

// Включает скролл на странице
const scrollOn = () => {
  document.body.style.overflow = "";
};

// Отключает скролл на странице
const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

// TODO: Готово
const modalWindow = (triggerSelector, modalSelector, closeSelector) => {
  const triggerButtons = document.querySelectorAll(triggerSelector),
    modal = document.querySelectorAll(modalSelector),
    closeButtons = document.querySelectorAll(closeSelector);

  triggerButtons.forEach((item, key) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      scrollOff();
      modal.forEach((item) => {
        item.classList.add("modal--enable");
      });
    });
  });

  modal.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target === item) {
        scrollOn();
        item.classList.remove("modal--enable");
      }
    });
  });

  closeButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      scrollOn();
      modal.forEach((item) => {
        item.classList.remove("modal--enable");
      });
    });
  });
};

// TODO: Сделать бургер меню

const burgerMenu = (triggerSelector, menuSelector, closeSelector) => {
  const openMenuButton = document.querySelector(triggerSelector),
    menuWindow = document.querySelector(menuSelector),
    closeButton = document.querySelector(closeSelector);

  // Открыть меню
  openMenuButton.addEventListener("click", () => {
    scrollOff();
    menuWindow.classList.add("main-aside-mobile--enable");
  });

  // Закрыть меню
  closeButton.addEventListener("click", () => {
    scrollOn();
    menuWindow.classList.remove("main-aside-mobile--enable");
  });
};

const pickSizeValid = (weightSelector, heightSelector, weightLabelSelector, heightLabelSelector, showButtonSelector, modalPickSizeSelector, userSizeSelector, prevButtonSelector) => {
  const weightInput = document.querySelector(weightSelector),
    heightInput = document.querySelector(heightSelector),
    weightLabel = document.querySelector(weightLabelSelector),
    heightLabel = document.querySelector(heightLabelSelector),
    showButtonSize = document.querySelector(showButtonSelector),
    modalPickSize = document.querySelector(modalPickSizeSelector),
    userSize = document.querySelector(userSizeSelector),
    prevButton = document.querySelector(prevButtonSelector);

  heightLabel.textContent = heightInput.value;
  weightLabel.textContent = weightInput.value;

  heightInput.addEventListener("input", (event) => {
    heightLabel.textContent = event.target.value;
    if (event.target.value >= 140 && event.target.value <= 149) {
      console.log(userSize.textContent);
      userSize.textContent = "XS";
    } else if (event.target.value >= 150 && event.target.value <= 169) {
      console.log(userSize.textContent);
      userSize.textContent = "S";
    } else if (event.target.value >= 170 && event.target.value <= 180) {
      console.log(userSize.textContent);
      userSize.textContent = "M";
    } else {
      console.log(userSize.textContent);
      userSize.textContent = "L";
    }
  });

  weightInput.addEventListener("input", (event) => {
    weightLabel.textContent = event.target.value;
  });

  showButtonSize.addEventListener("click", (event) => {
    modalPickSize.style.display = "flex";
    document.querySelector(".modal-choose-size").style.display = "none";
  });

  prevButton.addEventListener("click", () => {
    modalPickSize.style.display = "none";
    document.querySelector(".modal-choose-size").style.display = "flex";
  });
};

// Когда DOM дерево построится, то вызываем все функции
window.addEventListener("DOMContentLoaded", () => {
  modalWindow("#buttonPickSize", ".modal-overlay", ".modal-close");
  pickSizeValid("#widthInput", "#heightInput", "#modalWidthSize", "#modalHeightSize", "#modalShowSize", ".modal-user-size", "#userSizeLabel", "#prevModalWindow");
  burgerMenu(".header-nav__burger", ".main-aside-mobile", ".main-aside-mobile__closeButton");
});

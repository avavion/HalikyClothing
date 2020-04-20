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

// TODO: Доработать модальное окно
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

// Когда DOM дерево построится, то вызываем все функции
window.addEventListener("DOMContentLoaded", () => {
  modalWindow(".main-grid-item", ".modal-overlay", ".modal-close");
  console.log("DOM дерево готово!");
});

import { renderlist } from "../templates/templateCheckout"; // импорт функции

const homelistEl = document.querySelector(".js-list"); // ссылка на html- element

const PRODUCT_CARD_KEY = "PRODUCTS_CART";

const titleEl = document.querySelector(".total-price-label");
const checkListEl = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear");

const products = JSON.parse(localStorage.getItem(PRODUCT_CARD_KEY));
renderlist(products, homelistEl);

titleEl.innerHTML = products.length
  ? `Загальна вартість покупки: ${products.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )} грн`
  : "Your basket is empty";
// сюда треба записати вартість всіх товарів вибраних

const clearBtnHandler = (evt) => {
  const hasUserConfirm = confirm("Ви впевнені, що хочете очистити кошик?");
  if (hasUserConfirm) {
    localStorage.clear();
    window.location.href = "../index.html";
  } else {
    alert(" Ваш кошик повний");
  }
};
clearBtn.addEventListener("click", clearBtnHandler);

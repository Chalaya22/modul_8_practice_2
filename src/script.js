// создаем папку src c папками - checkout, css,
//model(c файлом product.json в котором содержится исходник наших карточек)б
// templates( )
//отдельно создаем файлы index.html и script.js

//Загружаем PARCEL - менеджер проэкта который собирает все наши файлы в один и делает за нас зборку кода,
//которую потом мы заливаем на гитхаб. Все файлы должны минификованые, аглификованые.
// package.json в терминал на общей папке(module_8_practice)
//- вводим npm init;
//- вводим npm instal --save-del parcel
// когда мі все загрузили у нас создался node_modules, packege-look.json, packege.json
// устаноила плагин VS Code gitignore (**** установка: Ctrl+ Shift+P после чего появляется окно
// ->  вводим туда add gitignor -> после ищем node gitignor). В файл устанавливаем
//.vscode
// node_modules/
// node_modules  - чтоб игнорировались ноуд модули
import { renderlist } from "./templates/templateHome"; // импорт функции
import JSON_PRODACTS from "./model/product.json"; // import наших карточек

const homelistEl = document.querySelector(".js-list"); // ссылка на html- element
const products = JSON_PRODACTS; //  в процесі імпорту  самостійно парситься
const PRODUCT_CARD_KEY = "PRODUCTS_CART";
renderlist(products, homelistEl);

const handlerListClick = (evt) => {
  if (!evt.target.classList.contains("js-add")) {
    return;
  } // тут перевіряєм чи місце на якому виникла подія  CLICK містить клас кнопки js-add
  // console.log(evt);
  const productEl = evt.target.closest(".js-prodact"); // отримуєм ліжку картки
  //   console.log(productEl);
  const idProduct = Number(productEl.dataset.id); // отримуєм id продукта
  //   console.log(idProduct);
  const currentProduct = products.find(({ id }) => id === idProduct); //!!!!! отримаєм всю  infa картки
  // console.log(product); //{id: 1, img: 'https://static.dnipro-m.ua/cache/products/6523/thumb_199341.jpg', name: 'Шуруповерт', price: 150, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}
  const cart = JSON.parse(localStorage.getItem(PRODUCT_CARD_KEY)) ?? []; // отримали чи ключ чи пустий масив
  const productIdx = cart.findIndex(({ id }) => id === idProduct);
  // console.log(productIdx);// якщо пусте сховище то індекс -1

  if (productIdx !== -1) {
    cart[productIdx].qty += 1;
  } else {
    productIdx.qty === 1;
    cart.push(currentProduct);
  }
  localStorage.setItem(PRODUCT_CARD_KEY, JSON.stringify(cart));
};
homelistEl.addEventListener("click", handlerListClick);

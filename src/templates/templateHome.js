//Страничка Home  должна содержать карточки товаров
//На списке товаров реализовано делегирование событий на добавление товаров
// Для добавления товаров в корзину используй localeStorage
//Во время добавления контролируй количество добавленых товаров,
//для этого создай в обьекте добавленого товара новый ключ quantity

//** в параметрах масив и контейнер куда будем рендерить разметку
export const renderlist = (arr, container) => {
  const markup = arr
    .map(
      (item) => ` <li data-id="${item.id}" class="product-card js-prodact">
      <img src="${item.img}" alt="${item.name}" class="product-img" />
      <h2 class="product-title">${item.name}</h2>
      <p class="product-description">${item.description}</p>
      <p class="products-price">${item.price} грн</p>
      <button class="product-add-btn js-add">Додати в корзину</button>
    </li>`
    )
    .join(" ");
  container.innerHTML = markup;
  // console.log(markup);// получим список карток в консолі
};
